interface AvailabilityCheck {
  checkIn: string;
  checkOut: string;
  roomCategory: string;
  guests: string;
}

interface AvailabilityResponse {
  available: boolean;
  suggestions?: {
    nextAvailableDate: string | null;
    alternativeRoomCategory: string;
  } | null;
  currentBookings: number;
  maxRooms: number;
}

export async function checkAvailability(params: AvailabilityCheck): Promise<AvailabilityResponse> {
  const queryParams = new URLSearchParams({
    checkIn: params.checkIn,
    checkOut: params.checkOut,
    roomCategory: params.roomCategory,
    guests: params.guests
  });

  try {
    const response = await fetch(`/api/availability/check?${queryParams}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to check availability');
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking availability:', error);
    throw error;
  }
}