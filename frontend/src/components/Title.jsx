import React from 'react';

const Title = ({ text1, text2, lineLength }) => {
  // Default values if not provided
  const defaultLength = { base: 8, sm: 12 };

  // If user provides a number or object, override
  const baseLength = lineLength?.base || defaultLength.base;
  const smLength = lineLength?.sm || defaultLength.sm;

  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className="text-gray-500 dark:text-gray-300">
        {text1}{' '}
        <span className="font-medium text-gray-700 dark:text-white">{text2}</span>
      </p>
      <p className={`w-${baseLength} sm:w-${smLength} h-[1px] sm:h-[2px] bg-gray-700 dark:bg-white`}></p>
    </div>
  );
};

export default Title;
