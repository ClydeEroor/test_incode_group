import React from 'react';
import logoImg from '../images/logo.svg';
const Header = () => {
  return (
    <header className={'w-full py-[10px] px-[27px]'}>
      <img width={40} height={40} src={`${logoImg}`} alt="header-logo" />
    </header>
  );
};

export default Header;
