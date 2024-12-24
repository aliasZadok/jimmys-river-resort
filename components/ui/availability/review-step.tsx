import { BookingFormData, RoomCategory } from '@/types/booking';
import { Button } from '@/components/ui/shadcn-button';
import { Edit2 } from 'lucide-react';

interface ReviewStepProps {
  formData: BookingFormData;
  roomCategories: RoomCategory[];
  onEdit: (step: 'availability' | 'details') => void;
}

export function ReviewStep({ formData, roomCategories, onEdit }: ReviewStepProps) {
  const selectedRoom = roomCategories.find(room => room.id === formData.roomCategory);
  
  const EditButton = ({ onClick }: { onClick: () => void }) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="absolute right-0 top-0 p-2 text-[var(--jrr-blue)]/70 hover:text-[var(--jrr-blue)] rounded-full"
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-[var(--jrr-blue)]">
            Booking Summary
          </h4>
        </div>
        
        <div className="relative border rounded-lg p-4">
          <EditButton onClick={() => onEdit('availability')} />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--jrr-blue)]/70">Check-in Date</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.checkIn}</p>
            </div>
            <div>
              <p className="text-[var(--jrr-blue)]/70">Check-out Date</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.checkOut}</p>
            </div>
            <div>
              <p className="text-[var(--jrr-blue)]/70">Number of Guests</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.guests}</p>
            </div>
            <div>
              <p className="text-[var(--jrr-blue)]/70">Room Category</p>
              <p className="font-medium text-[var(--jrr-blue)]">{selectedRoom?.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-medium text-[var(--jrr-blue)]">
          Contact Information
        </h4>
        
        <div className="relative border rounded-lg p-4">
          <EditButton onClick={() => onEdit('details')} />
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-[var(--jrr-blue)]/70">Full Name</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.name}</p>
            </div>
            <div>
              <p className="text-[var(--jrr-blue)]/70">Email</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.email}</p>
            </div>
            <div>
              <p className="text-[var(--jrr-blue)]/70">Phone Number</p>
              <p className="font-medium text-[var(--jrr-blue)]">{formData.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-medium text-[var(--jrr-blue)]">Price Details</h4>
        
        <div className="border rounded-lg p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p className="text-[var(--jrr-blue)]/70">Room Rate</p>
              <p className="font-medium text-[var(--jrr-blue)]">
                {selectedRoom?.price}<span className="text-xs ml-1">/night</span>
              </p>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <p className="font-medium text-[var(--jrr-blue)]">Taxes & Fees</p>
              <p className="font-medium text-[var(--jrr-blue)]">As applicable</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-[var(--jrr-blue)]/70">
          * Final price will be confirmed upon booking confirmation.
        </div>
      </div>
    </div>
  );
}