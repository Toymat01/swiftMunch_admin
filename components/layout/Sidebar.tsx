'use client';
import { ReactElement } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoDocumentOutline } from "react-icons/io5";
import { BiWalletAlt } from "react-icons/bi";
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { Barlow } from 'next/font/google'
import { SWIFT_SVG } from "../../public/images/index"
import { usePathname } from 'next/navigation'
const barlow = Barlow({ subsets: ['latin'], weight: ["400", "500", "600"] })
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"] })

interface MenuItem {
  label: string;
  icon?: ReactElement;
  path: string;
}

export const navlist: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <GrHomeRounded size={16} />,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: SWIFT_SVG().ordersIcon()
  },
  {
    label: "Menu",
    path: "/menu",
    icon: <IoDocumentOutline size={16} />,
  },
  {
    label: "Resturants",
    path: "/restaurants",
    icon: SWIFT_SVG().restaurantIcon()
  },
  {
    label: "Users",
    path: "/users",
    icon: SWIFT_SVG().usersIcon()
  },
  {
    label: "Drivers",
    path: "/drivers",
    icon: SWIFT_SVG().driverSvg()
  },
  {
    label: "Sub Admins",
    path: "/sub-admins",
    icon: SWIFT_SVG().subAdminIcon()
  },
  {
    label: "Promotions",
    path: "/promotions",
    icon: SWIFT_SVG().promotionIcon()
  },
  {
    label: "Accounting",
    path: "/accounting",
    icon: <BiWalletAlt size={16} />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: SWIFT_SVG().reportIcon()
  }
]

function Sidebar() {
  const pathname = usePathname();


  return (
    <div className={`${poppins.className} w-[20.5%] bg-white sticky top-0 left-0 overflow-y-scroll h-screen `}>
      <div className="top-section h-[12%] mb-10 " >
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"Swiftmunch logo"}
            width={200}
            height={130}
            className="pt-8 pl-10"
            priority={true}
          />
        </Link>
      </div>
      <ul className="nav-container flex flex-col gap-y-2">
        {navlist.map((nav, index) => {

          return (
            <li key={index} className='gay-y-4 flex items-center justify-between mr-6 font-semibold' >
              {pathname == nav.path ? <span className='w-[2%] bg-primary inline-block py-3 rounded-lg h-[2.7rem]'></span> : <span className='w-[2%] inline-block py-3 rounded-lg h-[2.7rem]'></span>}

              <Link
                href={nav.path}
                className={`pl-4 flex pr-4 text-[#595663] text-sm hover:bg-primary-shade hover:text-primary py-3 rounded-lg w-[90%] ${pathname === nav.path ? "bg-primary-shade text-primary font-extrabold" : ""}`}>
                {nav.icon}
                <span className="ml-5 " >{nav.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="my-10 bg-primary rounded-lg flex py-4 px-3 2xl:px-5 w-[85%] 2xl:w-4/5 mx-auto items-center">
        <div className="left">
          <p className="text-[0.8rem] text-white">Please, organize your menus through button bellow!</p>
          <button className="text-grey3 px-[0.5rem] font-medium py-2 rounded-lg text-sm flex items-center bg-white mt-4" >
            {SWIFT_SVG().plusIcon()}
            <span>Add Menus</span>
          </button>
        </div>
        <div className="right">
          {SWIFT_SVG().illustration()}
        </div>
      </div>

      <footer className={`${barlow.className} pl-6 text-[#969BA0]`}>
        <p className="font-bold text-[0.8rem]">SwiftMunch Restaurant Admin Dashboard</p>
        <p className="text-[0.8rem]">&copy;2024 All Rights Reserved</p>
        <p className="pt-2 pb-6 text-grey1">Made with <span className="text-primary">♥</span> by <a href="https://joshuaoyewole.com.ng" className="text-primary">Joshua Oyewole</a></p>
      </footer>
    </div>
  )
}

export default Sidebar