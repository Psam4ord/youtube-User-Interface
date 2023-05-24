import React from 'react'
import logoImg from '../assets/logo-icon/youtube.png';


const Logo = () => {
    return (
        <div className='flex space-x-[2px]'>
            <img src={logoImg} alt=""
                width={30}
                height={30}
            />
            <h1 className='font-poppins text-2xl'>YouTube </h1>
        </div>
    )
}

export default Logo;