import React from 'react';
import { Tick, Down, Warning, Right } from './icons/Icon';

const HeadSection = () => {
  return (
    <div className='w-5/6 mx-auto mt-[102px] text-[48px] text-[#2C384A] font-normal text-center'>
      <div>Best Website builders in the US</div>

      <hr className='text-[#E1E4E6] my-4' />

      <div className='flex text-[14px] justify-between'>
        <ul className='flex space-x-2'>
          <li className='flex space-x-2'>
            <span><Tick /></span>
            <span>Last Updated</span>
          </li>
          <li>-</li>
          <li>February 22, 2020</li>
          <li className='flex space-x-2'>
            <span><Warning /></span>
            <span>Advertising Disclosure </span>
          </li>
        </ul>
        <div className='flex space-x-2'>
          <span>Top Relevant</span>
          <span><Down /></span>
        </div>
      </div>

      <hr className='mt-4 text-[#E1E4E6]' />

      <div className='text-[13px] mt-8'>
        <ul className='flex text-[#4B5665] space-x-28'>
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>

      <div className='text-[13px] flex my-8 text-[#727D87]'>
        <ul className='flex space-x-4 items-center'>
          <li className='flex items-center space-x-4'>
            <span>Home</span>
            <span><Right /></span>
          </li>
          <li className='flex space-x-4 items-center'>
            <span>Hosting for all</span>
            <span><Right /></span>
          </li>
          <li className='flex space-x-4 items-center'>
            <span>Hosting</span>
            <span><Right /></span>
          </li>
          <li className='flex space-x-4 items-center'>
            <span>Hosting6</span>
            <span><Right /></span>
          </li>
          <li className='flex space-x-4 items-center'>Hosting5</li>
        </ul>
      </div>
    </div>
  )
}

export default HeadSection;
