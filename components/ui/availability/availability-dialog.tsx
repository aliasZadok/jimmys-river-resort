'use client';

import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from './booking-dialog';
import { Button as CustomButton } from '@/components/ui/button';
import { Button } from '@/components/ui/shadcn-button';
import { Loader2, ArrowLeft, Check } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AvailabilityStep } from './availability-step';
import { DetailsStep } from './details-step';
import { ReviewStep } from './review-step';
import { BookingFormData, RoomCategory, CheckAvailabilityDialogProps } from '@/types/booking';
import { checkAvailability } from './availability';

const roomCategories: RoomCategory[] = [
  { id: 'family-rooms', name: 'Family Rooms', capacity: '4-5 people', price: '₹4,000' },
  { id: 'deluxe-rooms', name: 'Deluxe Rooms', capacity: '2-3 people', price: '₹3,000' },
];

interface FormspreeError {
  message: string;
}

export default function CheckAvailabilityDialog({ 
  open, 
  onOpenChange,
  initialSelectedRoom
}: CheckAvailabilityDialogProps) {
  const [step, setStep] = useState<'availability' | 'details' | 'review' | 'confirmation'>('availability');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomCategory: '',
    name: '',
    email: '',
    phone: '',
  });

  // Reset form when dialog closes
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep('availability');
        setFormData({
          checkIn: '',
          checkOut: '',
          guests: '2',
          roomCategory: '',
          name: '',
          email: '',
          phone: '',
        });
        setError(null);
        setValidationError(null);
        setEditMode(false);
      }, 300);
    }
  }, [open]);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValidationError(null);
    setError(null);
  };

  const validateAvailabilityStep = (): string | null => {
    if (!formData.checkIn || !formData.checkOut) {
      return 'Check-in and check-out dates are required.';
    }
    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      return 'Check-out date must be after check-in date.';
    }
    if (!formData.roomCategory) {
      return 'Please select a room category.';
    }
    return null;
  };

  const handleStepChange = async (nextStep: 'availability' | 'details' | 'review') => {
    const currentValidationError = validateAvailabilityStep();
    
    if (currentValidationError) {
      setValidationError(currentValidationError);
      return;
    }

    // Only check availability when moving from availability step to details
    if (step === 'availability' && nextStep === 'details') {
      setIsLoading(true);
      setError(null);
      
      try {
        const availability = await checkAvailability({
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          roomCategory: formData.roomCategory,
          guests: formData.guests
        });

        if (!availability.available) {
          let errorMessage = 'Room not available for selected dates.';
          
          if (availability.suggestions?.nextAvailableDate) {
            errorMessage += ` Next available date is ${availability.suggestions.nextAvailableDate}.`;
          }
          
          if (availability.suggestions?.alternativeRoomCategory) {
            const altRoomName = availability.suggestions.alternativeRoomCategory
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            errorMessage += ` Consider checking our ${altRoomName}.`;
          }
          
          setError(errorMessage);
          return;
        }

        setStep(nextStep);
      } catch (error) {
        setError('Failed to check availability. Please try again.');
        console.error('Availability check error:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setStep(nextStep);
    }
    
    setValidationError(null);
  };

  const handleEdit = (targetStep: 'availability' | 'details') => {
    setEditMode(true);
    setStep(targetStep);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const selectedRoom = roomCategories.find(room => room.id === formData.roomCategory);
      const formDataToSubmit = {
        ...formData,
        roomName: selectedRoom?.name,
        roomPrice: selectedRoom?.price,
        message: `Booking request for ${selectedRoom?.name}\n` +
                `Check-in: ${formData.checkIn}\n` +
                `Check-out: ${formData.checkOut}\n` +
                `Guests: ${formData.guests}\n` +
                `Rate: ${selectedRoom?.price}/night`
      };

      const response = await fetch("https://formspree.io/f/meoqwpqg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataToSubmit)
      });

      if (response.ok) {
        setStep('confirmation');
      } else {
        const data = await response.json();
        const errors = data.errors as FormspreeError[];
        setError(errors?.map(error => error.message).join(", ") || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-full sm:max-w-md md:max-w-lg w-full h-[100dvh] sm:h-auto max-h-[90vh] bg-[var(--jrr-beige)] rounded-none sm:rounded-lg flex flex-col p-0 overflow-hidden"
      >
        <div className="flex-none p-4 sm:p-6 border-b border-[var(--jrr-dark-beige)]/20">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl text-[var(--jrr-blue)] font-bold text-center">
              {step === 'confirmation' ? 'Booking Confirmed' :
               step === 'availability' ? 'Check Availability' : 
               step === 'details' ? 'Enter Details' : 'Review Booking'}
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-[var(--jrr-blue)]/70">
              {step === 'availability' ? 'Select your preferred dates and room type' :
               step === 'details' ? 'Fill in your contact information' :
               step === 'review' ? 'Review your booking details' :
               'Thank you for choosing Jimmy\'s River Resort'}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="flex flex-col flex-1"
        >
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-h-[calc(80vh-200px)]">
            {(error || validationError) && (
              <Alert variant="destructive">
                <AlertDescription>
                  {error || validationError}
                </AlertDescription>
              </Alert>
            )}

            {step === 'availability' && (
              <AvailabilityStep
                formData={formData}
                onInputChange={handleInputChange}
                roomCategories={roomCategories}
                initialSelectedRoom={initialSelectedRoom}
              />
            )}

            {step === 'details' && (
              <DetailsStep
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {step === 'review' && (
              <ReviewStep
                formData={formData}
                roomCategories={roomCategories}
                onEdit={handleEdit}
              />
            )}

            {step === 'confirmation' && (
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--jrr-blue)]">
                  Thank You for Your Booking!
                </h3>
                <p className="text-sm text-[var(--jrr-blue)]/70">
                  We&apos;ve received your booking request and will get back to you shortly with confirmation details.
                </p>
              </div>
            )}
          </div>

          <div className="flex-none p-4 sm:p-6 border-t border-[var(--jrr-dark-beige)]/20">
            <DialogFooter className="sm:space-x-2">
              {step === 'confirmation' ? (
                <Button
                  onClick={() => onOpenChange(false)}
                  className="bg-[var(--jrr-green)] hover:bg-[var(--jrr-light-blue)] text-[var(--jrr-dark-beige)] w-full rounded-full h-12 text-lg font-normal"
                >
                  Close
                </Button>
              ) : (
                <>
                  {step !== 'availability' && !editMode && (
                    <CustomButton
                      onClick={() => {
                        if (editMode) {
                          setEditMode(false);
                          setStep('review');
                        } else {
                          setStep(prev => 
                            prev === 'review' ? 'details' : 'availability'
                          );
                        }
                      }}
                      variant="darkOutline"
                      shape="circle"
                      type="button"
                    >
                      <div className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </div>
                    </CustomButton>
                  )}
                  
                  {step === 'availability' && (
                    <CustomButton
                      onClick={() => handleStepChange('details')}
                      variant="green"
                      shape="circle"
                      type="button"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Checking...</span>
                        </div>
                      ) : (
                        'Continue'
                      )}
                    </CustomButton>
                  )}
                  
                  {step === 'details' && (
                    <CustomButton
                      onClick={() => handleStepChange('review')}
                      variant="green"
                      shape="circle"
                      type="button"
                    >
                      Review Booking
                    </CustomButton>
                  )}
                  
                  {step === 'review' && (
                    <Button
                      type="submit"
                      className="bg-[var(--jrr-green)] hover:bg-[var(--jrr-light-blue)] text-[var(--jrr-dark-beige)] w-full rounded-full h-12 text-lg font-normal"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      )}
                      Confirm Booking
                    </Button>
                  )}
                </>
              )}
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}