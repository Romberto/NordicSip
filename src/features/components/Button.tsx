import React from 'react';

export const Button: React.FC<{ 
    children: React.ReactNode; 
    variant?: 'primary' | 'outline' | 'ghost'; 
    className?: string;
    onClick?: () => void;
  }> = ({ children, variant = 'primary', className = '', onClick }) => {
    const base = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none";
    const variants = {
      primary: "bg-stone-900 text-white hover:bg-stone-800 shadow-lg shadow-stone-900/10",
      outline: "border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-50",
      ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100",
    };
    
    return (
      <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  };