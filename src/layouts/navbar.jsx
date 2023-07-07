import React, { useState } from "react";
import Footer from "./footer";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import Logo from "../commons/logo";
import Tooltip from "../components/tooltip";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" flex h-1/4 flex-row space-x-4 p-3 shadow-md hover:cursor-auto tablet::w-full ">
        {/* navbar menu icon */}
        <Tooltip text={"Menu"}>
          <AiOutlineMenu
            className=" relative inline-block 
                        p-1 hover:rounded-full hover:bg-[#cccccc]"
            size={40}
            onClick={toggleMenu}
          />
          {
            // show footer, if home-menu is clicked
            isOpen && (
              <div className="h-screen w-72">
                <Footer />{" "}
              </div>
            )
          }
        </Tooltip>

        {/* navbar logo icon */}
        <Tooltip text={"Kerrytube"}>
          <Logo
            className="relative inline-block 
                    p-1 hover:rounded-full hover:bg-[#cccccc]"
          />
        </Tooltip>

        <span>
          <input
            className=" hidden rounded-xl border border-[#cccccc] font-poppins"
            type="text"
            placeholder="Search..."
          />

          {/* navbar search icon */}
          <Tooltip text={"Search"}>
            <AiOutlineSearch
              size={40}
              className=" relative p-1 
                            hover:rounded-full hover:bg-[#cccccc] laptop:inline-block"
            />
          </Tooltip>
        </span>

        <Tooltip text={"Upload"}>
          <AiOutlineCloudUpload
            className="relative inline-block 
                        p-1 hover:rounded-full hover:bg-[#cccccc]"
            size={40}
          />
        </Tooltip>

        <Tooltip>
          {/* navbar-add-video-icon */}
          <BiVideoPlus
            className="relative hidden p-1 
                        hover:rounded-full hover:bg-[#cccccc] laptop:inline-block"
            size={40}
          />
        </Tooltip>

        <Tooltip text={"Notification"}>
          {/* navbar-notification-icon */}
          <IoMdNotificationsOutline
            className=" relative hidden p-1 
                        hover:rounded-full hover:bg-[#cccccc] laptop:inline-block"
            size={40}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default NavBar;
