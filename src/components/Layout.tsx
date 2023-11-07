import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Title from './Title';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'w-full flex flex-col'}>
      <Header />
      <Title />
      {children}
    </div>
  );
};

export default Layout;
