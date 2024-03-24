"use client";
import Table from "@/components/table/table";
import TableRow from "@/components/table/tablebody";
import moment from "moment";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

interface LoadingState {
  [key: number]: boolean;
}

const Restaurant = () => {
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

  return <div>
    <div className=" top flex justify-between mt-10 mb-8 flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-grey3 ">All  Restaurant</h3>
        <div className="pagination flex justify-between items-center gap-x-4">
          <p className="pages text-grey3 font-medium">1-10 of 20</p>
          <div className="pagination-btns flex justify-between items-center gap-x-2 text-primary ">
            <button className="font-semibold"> <LiaLessThanSolid /></button>
            <button className="font-semibold"> <LiaGreaterThanSolid /></button>
          </div>
        </div>
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



  </div>;
};

export default Restaurant;
