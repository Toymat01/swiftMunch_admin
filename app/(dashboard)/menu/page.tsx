
import React from "react";
import Header from "@/components/common/Header";
import MenuUI from "./menuUI/index"
import { FiPlus } from "react-icons/fi";

export const metadata = {
  title: "Menu - SwiftMunch Admin",
};

export default async function Order() {
  return <>
    <Header username='Samathan' />
    <main className="w-[95%] mx-auto mt-8">
      <div className="top flex items-center justify-between">
        <div className="left">
          <h1 className="text-2xl font-semibold text-grey3">Menu</h1>
          <p className="text-[#A3A3A3] text-sm mt-1">View all menu on SwiftMunch Admin!</p>
        </div>
        <div className="flex w-[28%] justify-between">
          <input
            type="search"
            id="default-search"
            className="block basis-[55%] pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border dark:placeholder-gray-300 dark:text-white "
            placeholder="Search Mockups, Logos..."
            required />
          <button className="more_options flex items-center border border-[#E81C4E] rounded-lg px-3 py-2 text-[0.9rem] font-semibold text-[#E81C4E] hover:bg-[#E81C4E] hover:text-white" >
            <FiPlus size={"1rem"} /> <span>Add Category</span>
          </button>
        </div>

      </div>
      <MenuUI />

    </main >
  </ >
}
