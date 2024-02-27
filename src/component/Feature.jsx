import React from 'react';
import { Cup, Stone } from './icons/Icon';

const Feature = ({ id }) => {
    let icon, title;

    if (id === 1) {
        icon = <Cup />;
        title = "Best Choice";
    } else if (id === 2) {
        icon = <Stone />;
        title = "Best Value";
    } else {
        // Default fallback if id is not 1 or 2
        icon = null;
        title = "";
    }

    return (
        <div className='bg-[#FF7724] text-white rounded-r-lg w-[136px] h-[34px] flex items-center space-x-2'>
            <span className='ml-2'>{icon}</span>
            <span>{title}</span>
        </div>
    );
}

export default Feature;
