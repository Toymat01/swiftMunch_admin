"use client"
import { PrimaryButton } from '@/components/ui/Buttons/Button'
import React from 'react'
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card/Card';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import user_profile from "../../../../../../public/images/profile_pixs.png"


function Page() {
    let order_id = "N6XX-OHYZ";
    let router = useRouter()

    let goBack = () => {
        router.back();
    }
    return (
        <div className="w-[95%] mx-auto ">
            <header className='flex justify-between items-center py-4'>
                <div className="order_header">
                    <span className='flex justify-between items-center'>
                        <button className='border-none outline-0' onClick={goBack}>
                            <IoIosArrowBack size={"1.15rem"} color={"#464255"} />
                        </button>
                        <h3 className="text-grey3 font-extrabold text-base ml-6">Order <span className='text-primary '>#{order_id}</span></h3>
                    </span>


                </div>
                <PrimaryButton content="Send To Vendor" extraClass='py-2' />
            </header>
            <main className='flex justify-between mt-10'>
                <Card width='w-[50%] pb-4 px-10'>
                    <div className='py-6'>
                        <h2 className='text-grey3 font-semibold text-xl'>Order Details</h2>
                        <div className="details">
                            <div className="detail_top text-sm flex flex-col gap-y-4 mt-8 ">
                                <p >1x Refuel Max</p>
                                <p className='flex justify-between '>
                                    <span className='w-[60%]'>Crunchy, Coleslaw, Jollof Rice, Fanta Orange 35cl</span>
                                    <span className='w-[30%]'>₦ 1,500</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[70%]'>Service Fee :</span>
                                    <span className='flex-1'>₦ 50</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[70%]'>Delivery Fee:</span>
                                    <span className='flex-1'>₦ 500</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[70%]'>Total Amount :</span>
                                    <span className='flex-1'>₦ 2,550</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[70%]'>Total Amount :</span>
                                    <span className='flex-1'>₦ 2,550</span>
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className='w-[35%] py-1'>Driver’s Name :</span>
                                    <div className='w-[44%]'>
                                        <span className=' bg-[#DCDCDC66] p-[0.4rem] rounded flex-1'>Ahmed Lawal</span>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center">
                                    <span className='w-[35%] py-1'>Driver’s Email :</span>
                                    <div>
                                        <span className=' bg-[#DCDCDC66] rounded p-[0.4rem] flex-1'>Ahmedlawal@gmail.com</span>
                                    </div>

                                </div>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Driver’s Number :</span>
                                    <span className='flex-1'>07098765432</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Created On :</span>
                                    <span className='flex-1'>Jan 5, 2023 10:54:26 AM</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Payment Type :</span>
                                    <span className='flex-1'>Before Delivery</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card width='w-[45%] pb-4 px-8'>
                    <div className='py-6'>
                        <h3 className='text-grey3 font-semibold text-base'>User Details</h3>
                        <div className="user_details_container text-grey3 mt-4 text-sm flex flex-col gap-y-2">
                            <div className='flex gap-x-2 items-center'>
                                <Image
                                    src={user_profile}//to be replaced by props
                                    height={30}
                                    width={30}
                                    alt='user ordering order profile pixs'
                                    priority={true}
                                />
                                <span className='font-bold text-base'>Ada John</span>
                            </div>
                            <p className='flex gap-x-7 items-center'>
                                <span >Email Address :</span>
                                <span >₦ 1,500</span>
                            </p>
                            <p className='flex gap-x-6 items-center'>
                                <span >Phone Number :</span>
                                <span >08043527930</span>
                            </p>
                            <p className='flex gap-x-3 '>
                                <span className='w-[33%]'>Delivery Address:</span>
                                <span >No.3 osapa london street, Ikoyi (Delivery)</span>
                            </p>
                        </div>
                    </div>
                </Card>
            </main >
        </div >

    )
}

export default Page