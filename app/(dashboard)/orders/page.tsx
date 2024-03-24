
import React from "react";
import Header from "@/components/common/Header";
import { TiExport } from "react-icons/ti";
import OrdersUI from "./ordersUI/index"

export const metadata = {
  title: "Orders",
};

export default async function Order() {
  return <>
    <Header username='Samathan' />
    <main className="w-[95%] mx-auto mt-8">
      <div className="top flex items-center justify-between">
        <div className="left">
          <h1 className="text-2xl font-semibold text-grey3">Orders</h1>
          <p className="text-[#A3A3A3] text-sm mt-1">View all orders on SwiftMunch Admin!</p>
        </div>
        <button className="more_options flex items-center border border-[#E81C4E] rounded-lg px-3 py-2 text-[0.9rem] font-semibold text-[#E81C4E] hover:bg-[#E81C4E] hover:text-white" >
          <TiExport size={"1.3rem"} /> <span>Export Data</span>
        </button>
      </div>
      <OrdersUI />

    </main >
  </ >
}
