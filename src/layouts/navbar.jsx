import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';



const NavBar = () => {
    const [search, setSearch] = useState(" ")


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Searching...')
    }
    return (
        <>
            <div className='flex flex-row mx-3 space-x-4 h-1/3 shadow-md p-3 ' >
                <AiOutlineMenu size={35} />
                <span className='flex'>
                    <input
                        className='font-poppins border rounded-xl border-[#cccccc]  '
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button> < AiOutlineSearch size={30} />  </button>
                </span>



                <BiVideoPlus
                    size={35}
                />
                <IoMdNotificationsOutline size={35} />
            </div>
        </>
    )
}

export default NavBar