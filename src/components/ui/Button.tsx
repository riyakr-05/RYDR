import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'lavender' | 'peach' | 'sage' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lavender-accent/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-plum text-ivory hover:bg-plum-dark shadow-soft hover:shadow-soft-lg',
    secondary: 'bg-ivory-200 text-plum hover:bg-ivory-300 border border-plum/10',
    lavender: 'bg-lavender text-plum hover:bg-lavender-accent/30 border border-lavender-accent/50',
    peach: 'bg-peach text-peach-dark hover:bg-peach-accent/40 border border-peach-accent/60',
    sage: 'bg-sage text-sage-text hover:bg-sage/80 border border-sage/70',
    outline: 'bg-transparent text-plum border border-plum/20 hover:bg-lavender/40 hover:border-plum/40',
    ghost: 'bg-transparent text-plum hover:bg-lavender/50',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
