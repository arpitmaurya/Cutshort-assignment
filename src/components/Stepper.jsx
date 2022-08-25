import React from 'react';

const displaySteps = (
  <>
    <div className='relative flex flex-col items-center text-teal-600'>
      <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3'>
        {/* Display Number */}
      </div>
    </div>
    <div className='flex-auto border-t-2 transition duration-500 ease-in-out'>
      {/* Display Line */}
    </div>
  </>
);

function Stepper() {
  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
     {displaySteps}
    </div>
  );
}

export default Stepper;
