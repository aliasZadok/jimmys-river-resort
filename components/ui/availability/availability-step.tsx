import { Calendar, Users, ChevronDown } from 'lucide-react';
import { BookingFormData, RoomCategory } from '@/types/booking';
import { useEffect } from 'react';

interface AvailabilityStepProps {
  formData: BookingFormData;
  onInputChange: (field: keyof BookingFormData, value: string) => void;
  roomCategories: RoomCategory[];
  initialSelectedRoom?: string;
}

export function AvailabilityStep({ 
  formData, 
  onInputChange,
  roomCategories,
  initialSelectedRoom
}: AvailabilityStepProps) {
  // Set initial room category when component mounts
  useEffect(() => {
    if (initialSelectedRoom && !formData.roomCategory) {
      onInputChange('roomCategory', initialSelectedRoom);
    }
  }, [initialSelectedRoom, formData.roomCategory, onInputChange]);

  return (
    <div className="space-y-6">
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--jrr-blue)]">
            Check-in Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => onInputChange('checkIn', e.target.value)}
              className="w-full px-4 py-3 border border-[var(--jrr-dark-beige)] rounded-md bg-white text-sm [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full cursor-pointer"
              required
            />
            <Calendar className="absolute right-3 top-3 h-5 w-5 text-[var(--jrr-blue)]/70 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--jrr-blue)]">
            Check-out Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => onInputChange('checkOut', e.target.value)}
              className="w-full px-4 py-3 border border-[var(--jrr-dark-beige)] rounded-md bg-white text-sm [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full cursor-pointer"
              required
            />
            <Calendar className="absolute right-3 top-3 h-5 w-5 text-[var(--jrr-blue)]/70 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--jrr-blue)]">
          Number of Guests
        </label>
        <div className="relative">
          <select
            value={formData.guests}
            onChange={(e) => onInputChange('guests', e.target.value)}
            className="w-full px-4 py-3 border border-[var(--jrr-dark-beige)] rounded-md bg-white appearance-none text-sm"
            required
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-3 flex items-center">
            <Users className="h-5 w-5 text-[var(--jrr-blue)]/70 mr-1" />
            <ChevronDown className="h-4 w-4 text-[var(--jrr-blue)]/70" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-[var(--jrr-blue)]">
          Select Room Category
        </label>
        <div className="grid gap-3">
          {roomCategories.map((room) => (
            <label
              key={room.id}
              className={`
                relative flex cursor-pointer rounded-lg border p-4 
                transition-colors duration-200
                ${formData.roomCategory === room.id 
                  ? 'border-[var(--jrr-blue)] bg-[var(--jrr-blue)]/5' 
                  : 'border-[var(--jrr-dark-beige)] bg-white hover:bg-[var(--jrr-blue)]/5'}
              `}
            >
              <input
                type="radio"
                value={room.id}
                name="room-category"
                checked={formData.roomCategory === room.id}
                onChange={(e) => onInputChange('roomCategory', e.target.value)}
                className="sr-only"
                required
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--jrr-blue)]">
                    {room.name}
                  </span>
                  <span className="text-xs text-[var(--jrr-blue)]/70 mt-1">
                    Up to {room.capacity}
                  </span>
                </div>
                <span className="text-sm font-medium text-[var(--jrr-blue)]">
                  {room.price}
                  <span className="text-xs ml-1">/night</span>
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}