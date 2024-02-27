import React from 'react';
import Image from '../assets/image.png';

const Deals = () => {
    return (
        <div>
            <div className='w-11/12 md:w-5/6 mx-auto mt-20'>
                <h1 className='text-[32px] text-[#2C384A] mb-10'>Related deals you might like for</h1>
                <div className='md:grid md:grid-cols-3 gap-8'>
                    {[1, 2, 3].map((index) => (
                        <div key={index} className='bg-white my-3 w-[333px] h-[425px] p-5 rounded-lg'>
                            <div>
                                <img src={Image} alt="image" />
                            </div>
                            <div className='space-x-4 my-3'>
                                <span className='text-[13px] p-2 bg-[#F2F4F7] rounded-md'>20% Off</span>
                                <span className='text-[14px] p-2 bg-[#F2F4F7] rounded-md'>Limited time</span>
                            </div>
                            <div>
                                <h1 className='text-[#626E79] text-center font-bold text-[16px]'>Webbuilder {index}</h1>
                            </div>
                            <div className='mt-2'>
                                <p className='text-[#626E79] text-[16px]'>Computer Modern clasic with wix support </p>
                                <div className='space-x-4'>
                                    <span className='text-[#5C6874] text-[20px]'>$39.96</span>
                                    <span className='text-[#9FA9B3] text-[14px]'>$49.96</span>
                                    <span className='text-[13px] text-[#EF4C5D]'>{`(20% Off)`}</span>
                                </div>
                                <div>
                                    <button className='bg-[#1B88F4] rounded-xl w-full h-[48px] text-white text-center'>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Deals;
