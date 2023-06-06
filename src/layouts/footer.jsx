import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi'
import {AiOutlineLike, AiOutlineSetting } from 'react-icons/ai'
import { IoMdAddCircleOutline, } from 'react-icons/io'
import { BsTrophy, BsFlag } from 'react-icons/bs'
import {
    MdOutlineVideoLibrary,
    MdOutlineVideoSettings,
    MdOutlineSubscriptions,
    MdHistory,
    MdOutlineWatchLater,
    MdTrendingUp,
    MdMusicNote,
    MdOutlineGamepad,
    MdOutlineHelpOutline,
    MdOutlineFeedback
} from 'react-icons/md'


const Footer = () => {
    return (
        <>

            <div className='xsmobile:w-3/4 h-full p-2 space-y-[20px] float-left '>
                <div>
                    <h3 className='flex items-center p-1'><BiHomeAlt2 />Home</h3>
                    <h3 className='flex items-center p-1' > <MdOutlineVideoSettings />Shorts </h3>
                    <h3 className='flex items-center p-1'> <MdOutlineSubscriptions /> Subscription </h3>
                </div>
                <hr className='h-[2px] bg-[#cccccc]' />

                <div>
                    <h3 className='flex items-center p-1'><MdOutlineVideoLibrary />Library </h3>
                    <h3 className='flex items-center p-1'> <IoMdAddCircleOutline />Create video </h3>
                    <h3 className='flex items-center p-1'>  <MdHistory />History</h3>
                    <h3 className='flex items-center p-1'> <MdOutlineWatchLater />Watch later </h3>
                    <h3 className='flex items-center p-1'><AiOutlineLike />Liked videos </h3>
                </div>

                <hr className='h-[2px] bg-[#cccccc]' />


                <div>
                    <h2 className=''>Subscription </h2 >

                </div>
                <hr className='h-[2px] bg-[#cccccc]' />

                <div>
                    <h2 className=''>Explore </h2 >
                    <h3 className='flex items-center p-1'> <MdTrendingUp /> Trending</h3>
                    <h3 className='flex items-center p-1'> <MdMusicNote />  Music </h3>
                    <h3 className='flex items-center p-1'> <MdOutlineGamepad />Gaming </h3>
                    <h3 className='flex items-center p-1'> <BsTrophy />Sports</h3>
                </div>
                <hr className='h-[2px] bg-[#cccccc]' />

                <div>
                    <h3 className='flex items-center p-1 ' > <AiOutlineSetting />  settings </h3>
                    <h3 className='flex items-center p-1 ' > <BsFlag />report history   </h3>
                    <h3 className='flex items-center p-1 ' > <MdOutlineHelpOutline />Help  </h3>
                    <h3 className='flex items-center p-1 ' > <MdOutlineFeedback />Send feedback </h3>
                </div>
                <hr className='h-[2px] bg-[#cccccc]' />

                <div className='mt-10'>
                    <h2 className=''>About </h2 >
                    <ul className='font-poppins'>
                        <a className='hover:text-blue-700' href="#">Contact us </a>
                        <a className='hover:text-blue-700' href="#">Developers </a>
                        <a className='hover:text-blue-700' href="#">Advertise </a>
                        <a className='hover:text-blue-700' href="#"> Creators </a>

                    </ul>
                    <ul className='font-poppins'>
                        <a className='hover:text-blue-700' href="#">Terms </a>
                        <a className='hover:text-blue-700' href="#">Privacy </a>
                        <a className='hover:text-blue-700' href="#">Policies & Safety </a>
                        <a className='hover:text-blue-700' href="#">How We Work </a>
                        <a className='hover:text-blue-700' href="#">New Features</a>

                    </ul>
                </div>
                <hr className='h-[2px] bg-[#cccccc]' />
                <span className='text-[#cccccc]'>
                    <p className='' translate='no'> &copy;2023 KERRY INC &trade; </p>
                    <p> All rights Reserved  &hearts; </p>
                </span>
            </div>
        </>
    )
}

export default Footer