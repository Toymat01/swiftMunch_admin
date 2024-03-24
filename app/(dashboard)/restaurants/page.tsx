
import React from "react";
import Header from "@/components/common/Header";
import ResturantUI from "./restaurantUI/index"
import { FiPlus } from "react-icons/fi";

export const metadata = {
  title: "Resturants - SwiftMunch Admin",
};

export default async function Restaurants() {
  return <>
    <Header username='Samathan' />
    <main className="w-[95%] mx-auto mt-8">
      <div className="top flex items-center justify-between">
        <div className="left">
          <h1 className="text-2xl font-semibold text-grey3">Restaurants</h1>
          <p className="text-[#A3A3A3] text-sm mt-1">View all restaurants on SwiftMunch Admin!</p>
        </div>
        <div className="flex w-[28%] justify-between">
          <input
            type="search"
            id="default-search"
            className="block basis-[55%] pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border dark:placeholder-gray-300 dark:text-white "
            placeholder="Search Resturants..."
            required />
          <button className="more_options flex items-center border border-[#E81C4E] rounded-lg px-3 py-2 text-[0.9rem] font-semibold text-[#E81C4E] hover:bg-[#E81C4E] hover:text-white" >
            <FiPlus size={"1rem"} /> <span>Add Restaurant</span>
          </button>
        </div>

      </div>
      <ResturantUI />

    </main >
  </ >
}
