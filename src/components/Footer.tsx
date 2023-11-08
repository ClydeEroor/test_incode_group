import React from 'react';
import companyLogo from '../images/company-logo.svg';
import githubLogo from '../images/github-logo.svg';
import twitterLogo from '../images/twiter-logo.svg';
import supportLogo from '../images/support-logo.svg';

const Footer = () => {
  return (
    <footer className={'flex flex-col w-full h-full bg-[#202329] py-[47px]'}>
      <div className={'flex flex-col text-center'}>
        <p
          className={
            'font-bold text-[#9E9E9E] text-[13px] leading-[22px] uppercase'
          }
        >
          performed as part of a test
        </p>
        <p
          className={
            'font-bold text-[#9E9E9E] text-[13px] leading-[22px] uppercase'
          }
        >
          case for th company
        </p>
      </div>
      <div className={'w-full flex pt-[34px] justify-center relative'}>
        <img width={50} height={50} src={`${companyLogo}`} alt="company-logo" />
      </div>
      <div>
        <div className={'flex justify-center w-full mt-10'}>
          <img src={`${githubLogo}`} alt="github-logo" />
          <img
            className={'px-[27px]'}
            src={`${twitterLogo}`}
            alt="twitter-logo"
          />
          <img src={`${supportLogo}`} alt="support-logo" />
        </div>
      </div>
      <div className={'flex w-full justify-center mt-[27px]'}>
        <p className={'text-[#9E9E9E] text-[13] leading-[22px]'}>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
