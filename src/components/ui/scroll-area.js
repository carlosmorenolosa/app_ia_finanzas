import React from 'react';

export function ScrollArea({ children, className }) {
  return (
    <div
      className={`overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 ${className}`}
      style={{ maxHeight: '100%', overflowX: 'hidden' }}
    >
      {children}
    </div>
  );
}
