// src/components/ui/button.js
import React from "react";

export function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
    outline: "bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
