import React from 'react';

const ButtonSpinner = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-8 h-8 border-4 border-dashed rounded-full animate-spin border-yellow-200'></div>
    </div>
  );
};

export default ButtonSpinner;