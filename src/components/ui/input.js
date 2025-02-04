import React from 'react';

export function Input({ value, onChange, onKeyDown, placeholder, className }) {
  return (
    <input
      type="text" // Se asegura de que el tipo sea un string válido
      value={value || ''} // Asegura que no se pase un valor `undefined` o `null`
      onChange={onChange || (() => {})} // Proporciona un fallback para onChange si no se pasa
      onKeyDown={onKeyDown || (() => {})} // Proporciona un fallback para onKeyDown si no se pasa
      placeholder={placeholder || ''} // Fallback para placeholder
      className={`border rounded p-2 w-full ${className || ''}`} // Maneja el caso de className no definido
    />
  );
}
