'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'green' | 'darkOutline';
  shape?: 'circle' | 'rounded';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  variant = 'primary', 
  shape = 'rounded',
  children, 
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-8 py-3 text-lg font-normal transition-colors";
  
  const variants = {
    primary: "bg-[var(--jrr-light-blue)] text-[var(--jrr-dark-beige)] hover:bg-[var(--jrr-green)]",
    secondary: "border border-[var(--jrr-beige)] text-[var(--jrr-beige)] bg-transparent hover:bg-[var(--jrr-light-blue)]",
    green: "bg-[var(--jrr-green)] text-[var(--jrr-dark-beige)] hover:bg-[var(--jrr-light-blue)] w-full",
    darkOutline: "border border-[var(--jrr-black)] text-[var(--jrr-black)] bg-transparent hover:bg-[var(--jrr-blue)] hover:text-[var(--jrr-beige)] hover:border-[var(--jrr-beige)]"
  };
  
  const shapes = {
    circle: "rounded-full",
    rounded: "rounded-md"
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  return (
    <button 
      className={`${baseStyles} ${shapes[shape]} ${variants[variant]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}