export interface BookingFormData {
    checkIn: string;
    checkOut: string;
    guests: string; // Keep this as string for form input
    roomCategory: string;
    name: string;
    email: string;
    phone: string;
  }
  
  export interface BookingSubmissionData {
    checkIn: string;
    checkOut: string;
    guests: number; // This will be the parsed number for submission
    roomCategory: string;
    name: string;
    email: string;
    phone: string;
  }
  
  export interface RoomCategory {
    id: string;
    name: string;
    capacity: string;
    price: string;
  }
  
  export interface BookingSubmission {
    data: BookingSubmissionData;
    created_at: string;
  }
  
  export interface CheckAvailabilityDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialSelectedRoom?: string;
  }
  
  