import React from 'react';
import {Down} from './icons/Icon';

const Footer = () => {
    return (
        <div className='bg-[#212731] p-5'>
            <div className='md:flex md:justify-between my-5 space-y-5 md:space-y-0 items-center w-5/6 mx-auto'>
                <div>
                    <h1 className='text-white text-[18px]'>Categories</h1>
                    <ul className='text-[#B6BDC4] text-[14px]'>
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-white text-[18px]'>Contact</h1>
                    <ul className='text-[#B6BDC4] text-[14px]'>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='text-[#D1D6DA] flex items-center space-x-2 '>
                    <span>United States</span>
                    <span><Down/></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
