import React from "react";
import Image from 'next/image'
import profile_pix from "../../public/images/profile_pixs.png";
import { FaRegBell } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { CgSearch } from "react-icons/cg";
import NotificationBox from "../ui/notification/NotificationBox";


interface IProps {
  username?: string,
  profile_pixs?: string
}

export default function Header({ username, profile_pixs }: IProps) {
  return (
    <header className="flex w-[95%] mx-auto py-4 justify-between">
      <span className=" flex justify-center items-center w-1/2 relative">
        <input type="search" name="search" id="search" placeholder="Search here" className="w-full py-2.5 rounded-lg px-6 outline-none " />
        <CgSearch className="absolute right-6" size={"1.5rem"} color={"#A4A4A4"} />
      </span>
      <div className="icons flex gap-x-6 w-1/5">
        <NotificationBox bg_color="bg-[#2D9CDB26]" icon={<FaRegBell size={"1.3rem"} color={"#2D9CDB"} className={"font-bold"} />} icon_bg="bg-[#2D9CDB]" notification_count={21} />{/* 
        <NotificationBox bg_color="bg-[#2D9CDB26]" icon={<RiMessage2Line size={"1.3rem"} color={"#2D9CDB"} className={"font-bold"} />} icon_bg="bg-[#2D9CDB]" notification_count={53} />
        <NotificationBox bg_color="bg-[#FF5B5B26]" icon={<CiSettings size={"1.6rem"} color={"#FF5B5B"} />} icon_bg="bg-[#FF5B5B]" notification_count={19} /> */}
      </div>
      <div className="profile w-[15%] bg-primary rounded-lg flex items-center justify-between px-2 text-sm text-white">
        <p className="text-[0.7rem]">Hello, <span className="font-medium">{username}</span></p>
        <Image
          src={profile_pixs ? profile_pixs : profile_pix}
          alt="Profile Pixs"
          width={35}
          height={35}
          priority={true}
        />
      </div>
    </header>
  );
}
