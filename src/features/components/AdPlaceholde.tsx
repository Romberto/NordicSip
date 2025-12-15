
import React from 'react';

export const AdPlaceholder: React.FC<{ label?: string; className?: string }> = ({
  label = 'Реклама',
  className = '',
}) => (
  <div className={`w-full bg-stone-100 border border-stone-200 p-4 flex flex-col items-center justify-center text-stone-400 text-xs tracking-widest uppercase my-8 ${className}`}>
    <span className="mb-2">{label}</span>
    <div className="w-full h-24 bg-stone-200/50 rounded-sm animate-pulse"></div>
  </div>
);

  