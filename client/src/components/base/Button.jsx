import React from 'react';

const Button = ({ variant = 'primary', onClick, children, disabled = false }) => {
  // Base button styles (common to all variants)
  const baseStyle = `
    font-bold 
    py-2 
    px-4 
    rounded 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    disabled: 'bg-gray-200 text-gray-500 cursor-not-allowed',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
