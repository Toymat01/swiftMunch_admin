"use client"
import Header from "@/components/common/Header";
import Table from "@/components/table/table";
import TableRow from "@/components/table/tablebody";
import moment from "moment";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";


interface LoadingState {
  [key: number]: boolean;
}


const User = () => {
  const ordersHeader = [
    "Restaurants", "Address", "Phone Number", "Email Address", "Pick-Up Commision", "Delivery Commision", "Revenue", "Status", "Action"
  ]

  const [isDropdownOpen, setIsDropdownOpen] = useState<LoadingState>({});
  const [resturants, setResturants] = useState([
    {
      id: 234,
      resturants: "Chicken Republic",
      address: "Lekki, Lagos",
      phone_no: "08098765432",
      email: "Adajohn@gmail.com",
      pickup_commission: "6",
      delivery_commission: "10",
      revenue: "25,000",
      status: "inactive"
    },
    {
      id: 134,
      resturants: "Mega Chicken",
      address: "Lekki, Lagos",
      phone_no: "08098765432",
      email: "Adajohn@gmail.com",
      pickup_commission: "6",
      delivery_commission: "10",
      revenue: "135,000",
      status: "active"
    }
  ])

  const toggleDropdown = (itemId: number) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  }
  return <>
    <Header username='Samathan' />
    <main className="w-[95%] mx-auto mt-8">
      <div className="top flex items-center justify-between">
        <div className="left">
          <h1 className="text-2xl font-semibold text-grey3">Users</h1>
          <p className="text-[#A3A3A3] text-sm mt-1">View all users on SwiftMunch Admin!</p>
        </div>
        <div className="flex w-[28%] justify-end">
          <input
            type="search"
            id="default-search"
            className="block py-2 basis-[55%] pl-4 w-full text-sm  focus:outline-0 text-gray-900 bg-gray-50 rounded-lg border dark:placeholder-gray-300 dark:text-white "
            placeholder="Search Customers..."
            required />
        </div>

      </div>
      <div>
        <div className=" top flex justify-between mt-10 mb-8 flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold text-grey3 ">All Users</h3>

          </div>
          <div className="my-10">
            <Table tableHeader={ordersHeader}>
              {resturants?.map(resturant => {
                return <TableRow key={resturant?.id}>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.id}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.address}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{moment(resturant?.phone_no).format('lll')}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.email}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.pickup_commission}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.delivery_commission}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >{resturant?.revenue}</td>
                  <td className="px-2 py-4 text-[#4F5871B8] text-center" >
                    <span
                      className={`py-1 px-[0.625rem] rounded-3xl font-medium ${resturant?.status == "inactive" ? "text-[#FF9900] bg-[#FFF7E6] " : resturant.status == "active" ? "text-[#32A659] bg-[#F0F4F2]" : ""}`}>
                      {resturant?.status}
                    </span>
                  </td>
                  <td className="px-2 py-4 text-[#4F5871B8] relative text-center" >
                    <>
                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button" onClick={() => toggleDropdown(resturant?.id)}>
                        <BsThreeDotsVertical />
                      </button>


                      <div id="dropdown" className={`z-10 ${isDropdownOpen[resturant?.id] ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute left-0`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                          <li>
                            <a href={`/restaurants/${resturant?.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">Info</a>
                          </li>
                        </ul>
                      </div>
                    </>


                  </td>
                </TableRow>
              })}
            </Table>
          </div>

        </div>



      </div>

    </main >
  </ >;
};

export default User;
