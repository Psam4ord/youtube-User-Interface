import React from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import Logo from '../commons/logo';
import Tooltip from '../components/tooltip';




const NavBar = () => {

    return (
        <>
            <div className=' flex flex-row space-x-4 h-1/4 shadow-md p-3 hover:cursor-auto laptop:w-full ' >

                {/* navbar menu icon */}
                <Tooltip  text={'Menu'} >
                    <AiOutlineMenu
                        className='hover:bg-[#cccccc] hover:rounded-full 
                        p-1 hover:relative inline-block'
                        size={40} 
                        />
                        </Tooltip>

                {/* navbar logo icon */}
                <Tooltip text={'Kerrytube'}>
                    <Logo
                    className='hover:bg-[#cccccc] hover:rounded-full 
                    p-1 hover:relative inline-block'
                    />
                </Tooltip >

                <span>
                    <input
                        className=' hidden font-poppins border rounded-xl border-[#cccccc]'
                        type='text'
                        placeholder='Search...'
                    />

                    {/* navbar search bar */}
                    <Tooltip text={'Search'} >
                        < AiOutlineSearch size={40}
                            className='hover:bg-[#cccccc] hover:rounded-full p-1'
                        />
                    </Tooltip>
                </span>

                <Tooltip text={'Upload'}>
                    <AiOutlineCloudUpload
                        className='hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40}
                    />

                </Tooltip>

                <Tooltip>
                    {/* navbar-add-video-icon */}
                    <BiVideoPlus
                        className='hidden hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40}
                    />
                </Tooltip>


                <Tooltip text={'Notification'}>
                    {/* navbar-notification-icon */}
                    <IoMdNotificationsOutline
                        className='hover:bg-[#cccccc] hover:rounded-full p-1'
                        size={40} />
                </Tooltip>

            </div>
        </>
    )
}

export default NavBar