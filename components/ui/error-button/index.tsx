interface ErrorButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export function ErrorButton({ children, onClick, className = '' }: ErrorButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`
          w-full max-w-md
          py-4 px-8
          bg-[var(--jrr-blue)]
          text-[var(--jrr-dark-beige)]
          rounded-full
          text-lg
          transition-colors
          duration-200
          hover:bg-[var(--jrr-blue)]/90
          font-display
          ${className}
        `}
      >
        {children}
      </button>
    );
  }