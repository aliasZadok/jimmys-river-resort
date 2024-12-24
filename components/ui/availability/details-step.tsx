import { BookingFormData } from '@/types/booking';
import { useState } from 'react';

interface DetailsStepProps {
  formData: BookingFormData;
  onInputChange: (field: keyof BookingFormData, value: string) => void;
}

interface FieldError {
  name: string | null;
  email: string | null;
  phone: string | null;
}

export function DetailsStep({ formData, onInputChange }: DetailsStepProps) {
  const [fieldErrors, setFieldErrors] = useState<FieldError>({
    name: null,
    email: null,
    phone: null
  });

  const validateField = (field: keyof FieldError, value: string) => {
    let error = null;

    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;
    }

    setFieldErrors(prev => ({
      ...prev,
      [field]: error
    }));

    return error === null;
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    onInputChange(field, value);
    if (field in fieldErrors) {
      validateField(field as keyof FieldError, value);
    }
  };

  const handleBlur = (field: keyof FieldError) => {
    validateField(field, formData[field]);
  };

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-1">
      <span className="text-sm font-medium text-[var(--jrr-blue)]">{children}</span>
      <span className="text-red-500">*</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Full Name Field */}
      <div className="space-y-2">
        <RequiredLabel>Full Name</RequiredLabel>
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={`
              w-full px-4 py-3 border rounded-md bg-white text-sm
              ${fieldErrors.name ? 'border-red-500' : 'border-[var(--jrr-dark-beige)]'}
              focus:outline-none focus:ring-2 focus:ring-[var(--jrr-blue)] focus:border-transparent
              ${!formData.name && 'border-[var(--jrr-dark-beige)]/70'}
            `}
            placeholder="Enter your full name"
            required
            aria-required="true"
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <RequiredLabel>Email</RequiredLabel>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`
              w-full px-4 py-3 border rounded-md bg-white text-sm
              ${fieldErrors.email ? 'border-red-500' : 'border-[var(--jrr-dark-beige)]'}
              focus:outline-none focus:ring-2 focus:ring-[var(--jrr-blue)] focus:border-transparent
              ${!formData.email && 'border-[var(--jrr-dark-beige)]/70'}
            `}
            placeholder="Enter your email"
            required
            aria-required="true"
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="space-y-2">
        <RequiredLabel>Phone Number</RequiredLabel>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={`
              w-full px-4 py-3 border rounded-md bg-white text-sm
              ${fieldErrors.phone ? 'border-red-500' : 'border-[var(--jrr-dark-beige)]'}
              focus:outline-none focus:ring-2 focus:ring-[var(--jrr-blue)] focus:border-transparent
              ${!formData.phone && 'border-[var(--jrr-dark-beige)]/70'}
            `}
            placeholder="Enter your phone number"
            required
            aria-required="true"
          />
          {fieldErrors.phone && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.phone}</p>
          )}
        </div>
      </div>

      {/* Required Fields Note */}
      <p className="text-xs text-[var(--jrr-blue)]/70">
        * Required fields
      </p>
    </div>
  );
}