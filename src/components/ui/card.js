// src/components/ui/card.js
import React from 'react';

// El contenedor principal
export function Card({ children, className }) {
  return (
    <div className={`rounded-lg shadow-sm bg-white ${className || ''}`}>
      {children}
    </div>
  );
}

// La cabecera del card
export function CardHeader({ children, className }) {
  return (
    <div className={`border-b p-4 ${className || ''}`}>
      {children}
    </div>
  );
}

// El título en la cabecera
export function CardTitle({ children, className }) {
  return (
    <h3 className={`text-lg font-semibold ${className || ''}`}>
      {children}
    </h3>
  );
}

// La descripción debajo del título
export function CardDescription({ children, className }) {
  return (
    <p className={`text-sm text-gray-500 ${className || ''}`}>
      {children}
    </p>
  );
}

// El contenido
export function CardContent({ children, className }) {
  return (
    <div className={`p-4 ${className || ''}`}>
      {children}
    </div>
  );
}
