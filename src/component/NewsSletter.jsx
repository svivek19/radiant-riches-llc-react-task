import React from 'react'

const NewsSletter = () => {
    return (
        <div className='grid grid-cols-2 w-5/6 mt-20 mb-10 mx-auto'>
            <div className='text-[32px] text-[#5C6874]'>Sign up and get exclusive <br /> special deals</div>
            <div className='items-center justify-end flex'>
                <input type="text" className=' bg-white w-[348px] p-4'/>
                <button className='w-[97px] bg-[#1B88F4] p-4 rounded-r-xl text-white text-[14px] items-center transform transition-transform duration-300 hover:scale-105'>Sign up </button>
            </div>
        </div>
    )
}

export default NewsSletter
