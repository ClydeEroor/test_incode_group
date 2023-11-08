import React from 'react';

const Filters = () => {
  return (
    <div className={' w-full h-full flex'}>
      <button
        className={
          'py-4 px-[46px] text-4 leading-6 bg-[#F5F5F5] text-[#272B33] rounded-[4px]'
        }
        type={'submit'}
      >
        FILTER
      </button>
    </div>
  );
};

export default Filters;
