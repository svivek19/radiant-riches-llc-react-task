import React from 'react';
import Image from '../assets/image.png';
import { Down, FourStar } from './icons/Icon';
import Feature from './Feature';

const Card = ({ title, para, offer, num, perform, id, build }) => {
    return (
        <div>
            <div className='w-5/6 my-8 mx-auto'>
                {id === 1 || id === 2 ? <Feature id={id} /> : null}
                <div className='grid grid-cols-3 bg-[#FFFFFF] p-4 rounded-xl'>
                    <div className='place-items-center'>
                        <p className='text-[#626E79] text-[20px] border border-[gray] p-2 rounded-full w-10 h-10 flex items-center justify-center'>{id}</p>
                        <img src={Image} alt="image" className='w-[141px] mx-auto mt-10 ' />
                        <p className='text-[13px] text-[#626E79] text-center mt-2'>{build}</p>
                    </div>

                    <div className='text-[16px] p-5 space-y-4 text-[#4B5665]'>
                        <p><b>{title}</b> - {para}</p>
                        <p className='text-[#074786] bg-[#F2F4F7] p-2 w-fit rounded-md'>{offer}</p>
                        <br />
                        <b className='text-[#2C384A]'>Main highlights</b>

                        <ul className='w-[405px] p-5 bg-[#FFF4ED] text-[#4B5665] space-y-2 rounded-md'>
                            <li className='space-x-4'>
                                <span className='text-[#1B88F4] bg-white p-1 rounded-md'>9.9</span>
                                <span className='text-[15px]'>building responsive</span>
                            </li>
                            <li className='space-x-4'>
                                <span className='text-[#1B88F4] bg-white p-1 rounded-md'>8.9</span>
                                <span className='text-[16px]'>Cool</span>
                            </li>
                            <li className='space-x-4'>
                                <span className='text-[#1B88F4] bg-white p-1 rounded-md'>8.9</span>
                                <span className='text-[16px]'>Docs</span>
                            </li>
                        </ul>

                        <div className='text-[16px] text-[#1B88F4] flex space-x-2'>
                            <span>Show more</span>
                            <span><Down /></span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='bg-[#F3F9FF] p-6 rounded-b-2xl w-5/12'>
                            <h3 className='text-[32px] text-[#074786] text-center font-normal'>{num}</h3>
                            <p className='text-[#074786] text-[14px] text-center my-3'>{perform}</p>
                            <span className='flex justify-center'><FourStar /></span>
                        </div>

                        <button className='bg-[#1B88F4] rounded-xl w-[232px] h-[48px] mt-20 text-white text-center transform transition-transform duration-300 hover:scale-105'>View</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;