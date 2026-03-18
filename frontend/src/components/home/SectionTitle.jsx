import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="bg-gradient-to-r from-[#2E9E6F] to-[#E6B325] bg-clip-text text-transparent font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0F1E3A] via-[#2E9E6F] to-[#0F1E3A] bg-clip-text text-transparent">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#E6B325] to-transparent ${centered ? 'w-32 mx-auto' : 'w-32'}`}></div>
    </div>
  );
};

export default SectionTitle;
