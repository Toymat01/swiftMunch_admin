import type { Metadata } from 'next'
import '../../app/globals.css'
import { Poppins } from 'next/font/google'
import React from 'react'
import Sidebar from "@/components/layout/Sidebar"


export const metadata: Metadata = {
  title: 'SwiftMunch App',
  description: 'Ordering at your finger-tip',
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"] })


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative flex bg-grey2 overflow-x-hidden`}>
      <Sidebar />
      <div className="right mx-auto w-[79.5%] h-screen overflow-y-scroll overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}
