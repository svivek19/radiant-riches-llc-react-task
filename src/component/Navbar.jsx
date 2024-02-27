import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#212731] h-[64px] items-center flex justify-center'>
            <div className="relative w-[258px] mr-4">
                <div
                    className="absolute top-0 left-0 flex items-center p-2.5 text-sm font-medium text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">    
                        </path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="search"
                    className="block p-2.5 pl-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg outline-none"
                />
            </div>
            <ul className='flex text-white text-[14px] gap-6'>
                <li className='cursor-pointer'>Categories</li>
                <li className='cursor-pointer'>Website Builders</li>
                <li className='cursor-pointer'>Today's deals</li>
            </ul>
        </div>
    );
}

export default Navbar;
