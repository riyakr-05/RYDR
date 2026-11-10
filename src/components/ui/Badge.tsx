import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sage' | 'lavender' | 'peach' | 'plum' | 'outline' | 'ivory';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lavender',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    sage: 'bg-sage/40 text-sage-text border-sage/60',
    lavender: 'bg-lavender text-plum border-lavender-accent/40',
    peach: 'bg-peach text-peach-dark border-peach-accent/50',
    plum: 'bg-plum text-ivory border-plum',
    outline: 'bg-transparent text-plum border-plum/20',
    ivory: 'bg-ivory-200 text-plum-light border-ivory-300',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-medium',
    md: 'text-xs px-3 py-1 rounded-full font-medium tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
