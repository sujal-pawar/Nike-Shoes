import React from 'react'

const Button = ({ label, iconURL ,fullWidth}) => {
    return (
        <button className={`flex items-center text-lg leading-none bg-coral-red 
        rounded-full text-white justify-center gap-2 px-7 py-4 
        border font-montserrat
        ${fullWidth ? 'w-full' : ''}`}>
            {label}
            {iconURL && <img src={iconURL} 
            alt="arrow right icon"
            className='ml-2 rounded-full w-5 h-5'
            />}
        </button>
    )
}

export default Button
