import React, { PropsWithChildren } from 'react';

const ContentContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={'bg-[#272B33] px-[107px] h-full pt-[40px] flex flex-col'}>
      {children}
    </div>
  );
};

export default ContentContainer;
