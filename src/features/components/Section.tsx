
import React from 'react';

export const Section: React.FC<{ 
    children: React.ReactNode; 
    className?: string; 
    id?: string;
  }> = ({ children, className = '', id }) => (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
  
