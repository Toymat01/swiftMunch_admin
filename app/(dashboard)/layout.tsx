import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import Sidebar from "../../components/layout/Sidebar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protect from './Protect';

export const metadata: Metadata = {
  title: 'SwiftMunch App',
  description: 'Ordering at your finger-tip',
}




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='2xl:mx-auto 2xl:my-0 4k:w-4/5 relative'>
        <Protect>
          <>
            <div className={`relative flex bg-grey2 overflow-x-hidden`}>
              <Sidebar />
              <div className="right mx-auto w-[98.5%] xl:w-[79.5%] h-screen overflow-y-scroll overflow-x-hidden">
                {children}
              </div>
            </div>
            <ToastContainer />
          </>

        </Protect>

      </body>
    </html>

  )
}
