import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import {
    MdOutlineVideoLibrary,
    MdOutlineVideoSettings,
    MdOutlineSubscriptions
} from 'react-icons/md'


const Footer = () => {
    return (
        <div  className=' w-1/3  h-96 p-3 space-y-[21px]  float-left mobile:hidden '>
            <BiHomeAlt2> <h3 className=' text-black'>home </h3></BiHomeAlt2>
            <IoMdAddCircleOutline />
            <MdOutlineVideoLibrary />
            <MdOutlineSubscriptions />
            <MdOutlineVideoSettings />

        </div>
    )
}

export default Footer