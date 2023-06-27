import React, { useState } from 'react';
import Footer from './footer';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import Logo from '../commons/logo';
import Tooltip from '../components/tooltip';





const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <>
            <div className=' flex flex-row space-x-4 h-1/4 shadow-md p-3 hover:cursor-auto laptop:w-full ' >

                {/* navbar menu icon */}
                <Tooltip text={'Menu'}  >
                    <AiOutlineMenu
                        className=' hover:bg-[#cccccc] hover:rounded-full 
                        p-1 relative inline-block'
                        size={40}
                        onClick={toggleMenu}
                    />
                    { 
                        // show footer, if home-menu is clicked
                        isOpen && (<div className='w-72 h-screen'><Footer /> </div>)
                    }
                </Tooltip>

                {/* navbar logo icon */}
                <Tooltip text={'Kerrytube'}>
                    <Logo
                        className='hover:bg-[#cccccc] hover:rounded-full 
                    p-1 relative inline-block'
                    />
                </Tooltip >

                <span>
                    <input
                        className=' hidden font-poppins border rounded-xl border-[#cccccc]'
                        type='text'
                        placeholder='Search...'
                    />

                    {/* navbar search icon */}
                    <Tooltip text={'Search'} >
                        < AiOutlineSearch size={40}
                            className=' hover:bg-[#cccccc] hover:rounded-full 
                            p-1 relative laptop:inline-block'
                        />
                    </Tooltip>
                </span>

                <Tooltip text={'Upload'}>
                    <AiOutlineCloudUpload
                        className='hover:bg-[#cccccc] hover:rounded-full 
                        p-1 relative inline-block'
                        size={40}
                    />

                </Tooltip>

                <Tooltip>
                    {/* navbar-add-video-icon */}
                    <BiVideoPlus
                        className='hidden hover:bg-[#cccccc] hover:rounded-full 
                        p-1 relative laptop:inline-block'
                        size={40}
                    />
                </Tooltip>


                <Tooltip text={'Notification'}>
                    {/* navbar-notification-icon */}
                    <IoMdNotificationsOutline
                        className=' hidden hover:bg-[#cccccc] hover:rounded-full 
                        p-1 relative laptop:inline-block'
                        size={40} />
                </Tooltip>

            </div>
        </>
    )
}

export default NavBar