import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, error, success, ...rest }) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          px-3
          py-2
          border
          rounded-md
          text-gray-700
          leading-tight
          focus:outline-none
          focus:shadow-outline
          ${error ? 'border-red-500' : ''}
          ${success ? 'border-green-500' : ''}
        `}
        {...rest} // Pass any additional props to the input element
      />
      {error && (
        <p className="absolute text-xs italic text-red-500 mt-2">{error}</p>
      )}
      {success && (
        <p className="absolute text-xs italic text-green-500 mt-2">{success}</p>
      )}
    </div>
  );
};

export default Input;
