import React from 'react';

function StepperControl() {
  return (
    <div className='container flex  justify-center mt-4 mb-8'>
      {/* Next Button */}
      <button className='w-full py-3 px-4 rounded-md bg-[#664de5] text-[#e3dffa] font-semibold cursor-pointer  hover:bg-[#836bfb] hover:text-white transition duration-200'>
        Create Worspace
      </button>
    </div>
  );
}

export default StepperControl;
