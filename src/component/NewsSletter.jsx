import React from 'react'

const NewsSletter = () => {
    return (
        <div className='md:grid md:grid-cols-2 w-11/12 md:w-5/6 mt-10 md:mt-20 mb-10 mx-auto'>
            <div className='text-[32px] text-[#5C6874]'>Sign up and get exclusive <br className='hidden md:block'/> special deals</div>
            <div className='items-center justify-end flex mt-5 md:mt-0'>
                <input type="text" className=' bg-white  md:w-[348px] p-4'/>
                <button className='w-[97px] bg-[#1B88F4] p-4 rounded-r-xl text-white text-[14px] items-center transform transition-transform duration-300 hover:scale-105'>Sign up </button>
            </div>
        </div>
    )
}

export default NewsSletter
