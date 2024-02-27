import React from 'react'
import Image from '../assets/image.png';
import { Down, FullStar } from './icons/Icon'

const Card = () => {
    return (
        <div className='w-5/6 mx-auto grid grid-cols-3'>
            <div className='place-items-center'>
                <p className='text-[#626E79] text-[20px] border border-[gray] p-2 rounded-full w-10 h-10 flex items-center justify-center'>1</p>
                <img src={Image} alt="image" className='w-[141px] mx-auto mt-10 ' />
            </div>

            <div className='text-[16px] p-5 space-y-4 h-32 text-[#4B5665]'>
                <p><b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                <br />
                <b className='text-[#2C384A]'>Main highlights</b>

                <p className='ml-5'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

                <div className='text-[16px] text-[#1B88F4] flex space-x-2'>
                    <span>Show more</span>
                    <span><Down /></span>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#F3F9FF] p-6 rounded-b-2xl w-5/12'>
                    <h3 className='text-[32px] text-[#074786] text-center font-normal'>9.8</h3>
                    <p className='text-[#074786] text-[14px] text-center my-3'>Exceptional</p>
                    <span className='flex justify-center'><FullStar /></span>
                </div>

                <button className='bg-[#1B88F4] rounded-xl w-[232px] h-[48px] mt-20 text-white text-center transform transition-transform duration-300 hover:scale-105'>View</button>
            </div>
        </div>
    )
}

export default Card
