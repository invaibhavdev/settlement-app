import React from 'react';

const Alert = ({ type = 'info', message }) => {
  const colors = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`${colors[type]} border rounded px-4 py-3 mb-4`}>
      {message}
    </div>
  );
};

export default Alert;
