import React from 'react';

const Text = ({ variant = 'body', children, ...rest }) => {
  // Base text styles (common to all variants)
  const baseStyle = `
    text-gray-800 
    leading-relaxed 
  `;

  // Variant-specific styles
  const variantStyles = {
    h1: 'text-4xl font-bold mb-4',
    h2: 'text-2xl font-semibold mb-2',
    h3: 'text-xl font-medium mb-1',
    body: 'text-base',
    small: 'text-sm text-gray-600',
  };

  return (
    <p className={`${baseStyle} ${variantStyles[variant]}`} {...rest}>
      {children}
    </p>
  );
};

export default Text;
