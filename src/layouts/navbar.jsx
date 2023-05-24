import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import Logo from '../commons/logo';




const NavBar = () => {
    const [search, setSearch] = useState(" ")
    const [isHovered, setIsHovered] = useState(false)

    // onhover set to true
    const handleHover = () => {
        setIsHovered(true)
    }

    // set back to false if mouse leave
    const onMouseLeave = () => {
        setIsHovered(false);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Searching...')
    }
    return (
        <>

            <div className=' flex flex-row space-x-4 h-1/4 shadow-md p-3 ' >
                <AiOutlineMenu
                    className='hover:bg-[#cccccc] hover:rounded-full p-1'
                    size={40}

                />

                <span>
                    <Logo />
                </span>

                <span className='flex'>
                    <input
                        className='hidden font-poppins border rounded-xl border-[#cccccc]  '
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button> < AiOutlineSearch size={40}
                        className='hover:bg-[#cccccc] hover:rounded-full p-1'
                    />  </button>
                </span>


                <AiOutlineCloudUpload
                    className='hover:bg-[#cccccc] hover:rounded-full p-1'
                    size={40}
                    onChange={handleHover}
                />

                <BiVideoPlus
                    className='hidden hover:bg-[#cccccc] hover:rounded-full p-1'
                    size={40}
                />


                <IoMdNotificationsOutline
                    className='hidden hover:bg-[#cccccc] hover:rounded-full p-1'
                    size={40} />
   

            </div>
        </>
    )
}

export default NavBar