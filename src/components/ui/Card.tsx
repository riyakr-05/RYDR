import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'lavender' | 'ivory' | 'plum' | 'outline' | 'glass';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  onClick,
}) => {
  const variantStyles = {
    default: 'bg-white border border-lavender/80 shadow-soft',
    lavender: 'bg-lavender/50 border border-lavender-accent/40 shadow-soft',
    ivory: 'bg-ivory-200 border border-ivory-300 shadow-soft',
    plum: 'bg-plum text-ivory border border-plum-light/30 shadow-soft-lg',
    outline: 'bg-transparent border border-plum/15',
    glass: 'glass-card shadow-soft',
  };

  const hoverClass = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5 cursor-pointer' 
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
