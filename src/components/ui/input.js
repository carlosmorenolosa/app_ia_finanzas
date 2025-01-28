// src/components/ui/input.js
import React from "react";

export function Input({ type = "text", value, onChange, placeholder, className = "" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300 ${className}`}
    />
  );
}
