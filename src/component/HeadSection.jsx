import React from 'react';
import { Tick, Down, Warning } from './icons/Icon';

const HeadSection = () => {
  return (
    <div className='w-5/6 mx-auto mt-[102px] text-[48px] text-[#2C384A] font-normal text-center'>
      <div>Best Website builders in the US</div>
      <hr className='text-[#E1E4E6] my-3' />

      <div className='flex text-[14px] justify-between'>
        <ul className='flex'>
          <li>Last Updated <Tick/></li>
          <li>February 22, 2020</li>
          <li>Advertising Disclosure <Warning /></li>
        </ul>
        <div>
          <p>Top Relevant <span className='bg-red-200'><Down /></span></p>
        </div>
      </div>
    </div>
  )
}

export default HeadSection;
