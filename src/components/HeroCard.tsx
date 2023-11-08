import React from 'react';
import { Character } from '../graphql/__generated__/graphql';
import { CheckStatus } from '../helpers/checkStatus';

const HeroCard = ({ characters }: { characters: Character }) => {
  console.log(characters);

  const { image, name, location, species, status, episode } = characters;
  return (
    <div className={'flex w-full max-w-[600px]'}>
      <div className={'w-full flex h-full max-w-[229px] max-h-[220px]'}>
        <img
          className={'min-w-[229px] min-h-[220px]'}
          src={`${image}`}
          alt={`${characters.name}`}
        />
      </div>
      <div className={'flex flex-col w-full py-[14px] px-[13px] bg-[#3C3E44]'}>
        <p
          className={'text-[27px] leading-[30px] font-extrabold text-[#F5F5F5]'}
        >
          {name}
        </p>
        <div className={'flex items-center'}>
          <span
            className={`w-[9px] mt-[4px] h-[9px] rounded-full ${CheckStatus(
              status as string,
            )}`}
          ></span>
          <p
            className={
              'text-[16px] pl-[7px] leading-[26px] text-white font-medium'
            }
          >{`${status} - ${species}`}</p>
        </div>
        <div className={'flex flex-col mt-[13px]'}>
          <p
            className={'text-[15px] leading-[26px] text-[#9E9E9E] font-medium'}
          >
            Last know Location:
          </p>
          <p className={'text-[14px] leading-[30px] text-[#F5F5F5]'}>
            {location?.name}
          </p>
        </div>
        <div className={'flex flex-col mt-[13px]'}>
          <p
            className={'text-[15px] leading-[26px] text-[#9E9E9E] font-medium'}
          >
            First seen:
          </p>
          <p className={'text-[14px] leading-[30px] text-[#F5F5F5]'}>
            {episode[0]?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
//
// name
// status "alive,dead,uncknow"
// image
// lastknowLoacation
// firstSeen(episode)
