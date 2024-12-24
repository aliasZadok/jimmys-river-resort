import { NextResponse } from 'next/server';

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const API_KEY = process.env.FORMSPREE_API_KEY;
const MAX_ROOMS_PER_CATEGORY = 4; // 8 rooms total, 4 per category

interface FormspreeData {
  checkIn?: string;
  checkOut?: string;
  roomCategory?: string;
  guests?: number;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  roomName?: string;
  roomPrice?: string;
}

interface FormspreeSubmission {
  id: string;
  created_at: string;
  email: string;
  data: FormspreeData;
}

export async function GET(request: Request) {
  try {
    // Get and validate query parameters
    const { searchParams } = new URL(request.url);
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const roomCategory = searchParams.get('roomCategory');
    const guests = searchParams.get('guests');

    console.log('Checking availability for:', {
      checkIn,
      checkOut,
      roomCategory,
      guests
    });

    if (!checkIn || !checkOut || !roomCategory || !guests) {
      return NextResponse.json(
        { error: 'Missing required parameters' }, 
        { status: 400 }
      );
    }

    if (!FORM_ID || !API_KEY) {
      console.error('Missing Formspree configuration:', {
        FORM_ID: !!FORM_ID,
        API_KEY: !!API_KEY
      });
      return NextResponse.json(
        { error: 'Server configuration error' }, 
        { status: 500 }
      );
    }

    // Fetch submissions from Formspree
    const response = await fetch(
      `https://formspree.io/api/0/forms/${FORM_ID}/submissions`,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('Formspree API error:', {
        status: response.status,
        statusText: response.statusText
      });
      throw new Error(`Formspree API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Formspree API response:', JSON.stringify(data, null, 2));

    const submissions: FormspreeSubmission[] = data.submissions || [];
    console.log('Number of submissions:', submissions.length);

    if (submissions.length > 0) {
      console.log('First submission example:', JSON.stringify(submissions[0], null, 2));
    }

    // Filter overlapping bookings for the requested room category
    const overlappingBookings = submissions.filter((submission: FormspreeSubmission) => {
      // Log each submission being processed
      console.log('Processing submission:', {
        id: submission.id,
        data: submission.data,
        hasRoomCategory: !!submission.data?.roomCategory,
        matchesCategory: submission.data?.roomCategory === roomCategory
      });

      // Skip if different room category or if roomCategory is undefined
      if (!submission.data?.roomCategory || submission.data.roomCategory !== roomCategory) {
        return false;
      }

      // Skip if missing date information
      if (!submission.data.checkIn || !submission.data.checkOut) {
        return false;
      }

      // Convert submission dates
      const bookingCheckIn = new Date(submission.data.checkIn);
      const bookingCheckOut = new Date(submission.data.checkOut);
      const requestedCheckIn = new Date(checkIn);
      const requestedCheckOut = new Date(checkOut);

      // Check for date overlap
      const hasOverlap = bookingCheckIn <= requestedCheckOut && 
                        bookingCheckOut >= requestedCheckIn;

      console.log('Date comparison:', {
        submissionId: submission.id,
        bookingCheckIn: bookingCheckIn.toISOString(),
        bookingCheckOut: bookingCheckOut.toISOString(),
        requestedCheckIn: requestedCheckIn.toISOString(),
        requestedCheckOut: requestedCheckOut.toISOString(),
        hasOverlap
      });

      return hasOverlap;
    });

    console.log('Overlapping bookings:', {
      count: overlappingBookings.length,
      details: overlappingBookings.map(b => ({
        id: b.id,
        checkIn: b.data.checkIn,
        checkOut: b.data.checkOut
      }))
    });

    // Check availability
    const isAvailable = overlappingBookings.length < MAX_ROOMS_PER_CATEGORY;
    console.log('Availability result:', {
      isAvailable,
      currentBookings: overlappingBookings.length,
      maxRooms: MAX_ROOMS_PER_CATEGORY
    });

    // If not available, prepare suggestions
    let suggestions = null;
    if (!isAvailable && overlappingBookings.length > 0) {
      // Find the next available date after the requested checkout
      const lastOverlappingBooking = overlappingBookings
        .map((booking: FormspreeSubmission) => new Date(booking.data.checkOut!))
        .sort((a: Date, b: Date) => b.getTime() - a.getTime())[0];

      suggestions = {
        nextAvailableDate: lastOverlappingBooking 
          ? new Date(lastOverlappingBooking.getTime() + 86400000).toISOString().split('T')[0]
          : null,
        alternativeRoomCategory: roomCategory === 'family-rooms' ? 'deluxe-rooms' : 'family-rooms'
      };

      console.log('Suggestions:', suggestions);
    }

    return NextResponse.json({
      available: isAvailable,
      suggestions,
      currentBookings: overlappingBookings.length,
      maxRooms: MAX_ROOMS_PER_CATEGORY
    });

  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}