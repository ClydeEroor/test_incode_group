import React, { PropsWithChildren } from 'react';
import Header from './Header';
import Title from './Title';
import Footer from './Footer';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'w-full flex flex-col'}>
      <Header />
      <Title />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
