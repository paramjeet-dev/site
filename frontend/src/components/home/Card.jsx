import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  shadow = 'default',
  padding = 'default',
  onClick 
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl border border-gray-200
        ${shadowClasses[shadow] || shadowClasses.default}
        ${paddingClasses[padding] || paddingClasses.default}
        ${hover ? 'hover:shadow-2xl hover:-translate-y-1 hover:border-[#E6B325]/30 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
