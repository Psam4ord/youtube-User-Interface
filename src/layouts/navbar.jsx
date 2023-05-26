import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import Logo from '../commons/logo';




const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <>
            <div className=' flex flex-row space-x-4 h-1/4 shadow-md p-3' >

                {/* navbar menu icon */}
                <span >
                    <AiOutlineMenu
                        className='hover:bg-[#cccccc] hover:rounded-full p-1'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        size={40} />
                    {isHovered && <div className="hover:float-right">menu</div>}
                </span >


                {/* navbar logo icon */}
                <div>
                    <Logo

                    />

                </div >

                <span>
                    <input
                        className=' hidden font-poppins border rounded-xl border-[#cccccc]'
                        type='text'
                        placeholder='Search...'
                    />


                    {/* navbar search bar */}
                    <button >
                        < AiOutlineSearch size={40}
                            className='hover:bg-[#cccccc] hover:rounded-full p-1'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                        {isHovered && <div className="relative  left-0 top-0 right-0 bottom-0" >logo </div>}
                    </button>
                </span>

                <span>
                    {/* navbar-upload-icon */}

                    <AiOutlineCloudUpload
                        className='hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40}
                       
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                     {isHovered && <div className="" >upload </div>}
                </span>

                <span>
                    {/* navbar-add-video-icon */}
                    <BiVideoPlus
                        className='hidden hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40}
                    />
                </span>

                <span>
                    {/* navbar-notification-icon */}
                    <IoMdNotificationsOutline
                        className='hidden hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40} />
                </span>

            </div>
        </>
    )
}

export default NavBar