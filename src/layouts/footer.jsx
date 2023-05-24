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
        <div>
            <BiHomeAlt2 />
            <IoMdAddCircleOutline />
            <MdOutlineVideoLibrary />
            <MdOutlineSubscriptions />
            <MdOutlineVideoSettings />

        </div>
    )
}

export default Footer