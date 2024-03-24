"use client"
import { PrimaryButton } from '@/components/ui/Buttons/Button'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import { Card } from '@/components/ui/card/Card';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import user_profile from "../../../../../public/images/profile_pixs.png"
import rating from "../../../../../public/images/starts.png"
import { toast } from 'react-toastify';
import moment from 'moment';
import { Spinner } from '@/components/ui/Spinner/Spinner';

type orderIdType = {
    orderId: number
}
type userType = {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    address: string,
}
type orderDetailsType = {
    user: userType,
    order_no: string,
    menuitems_name: string,
    menuitem_image: string,
    total_amount: string,
    created_at: string,
    order_status: string,
    delivered_on?: string,
    brand_order_status: string,
    rider_order_status: string,
    quantity: string,
    amount?: string,
    delivery_fee?: string,
    payment_type: string,
    assigned_rider: string,
}
function Page() {
    const { orderId } = useParams();
    let router = useRouter();
    const [orderDetails, setOrdersDetails] = useState<orderDetailsType>({} as orderDetailsType);
    const [isLoading, setIsLoading] = useState(false);
    const [token] = useState(localStorage.getItem("token")?.replace(/^"|"$/g, ''));

    let goBack = () => {
        router.back();
    }

    const fetchOrder = useCallback(() => {
        fetch(`https://swiftmunch.onrender.com/orders/admin-orders/${orderId}`, {
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                setOrdersDetails(data)
                setIsLoading(false)
                console.log(data);

            }).catch(err => {
                if (err?.status == 401) {
                    router.push("/login")
                }
                setOrdersDetails({} as orderDetailsType)
                setIsLoading(false)
                toast.error("An Error Occurred");
            })
    }, [orderId, router, token])
    useEffect(() => {
        setIsLoading(true)
        fetchOrder()
    }, [fetchOrder])


    return (
        <div className="w-[95%] mx-auto ">
            <header className='flex justify-between items-center py-4'>
                <div className="order_header">
                    <span className='flex justify-between items-center'>
                        <button className='border-none outline-0' onClick={goBack}>
                            <IoIosArrowBack size={"1.15rem"} color={"#464255"} />
                        </button>
                        <h3 className="text-grey3 font-extrabold text-base ml-6">Order <span className='text-primary '>#{orderId}</span></h3>
                    </span>


                </div>
                <PrimaryButton content="Save Details" extraClass='py-2' />
            </header>
            <main className='flex justify-between mt-10'>
                <Card width='w-[50%] pb-4 px-10'>
                    <div className='py-6'>
                        <h2 className='text-grey3 font-semibold text-xl'>Order Details</h2>
                        {isLoading ? <Spinner color='text-primary' size='w-8 h-8 mt-10' /> : <div className="details">
                            <div className="detail_top text-sm flex flex-col gap-y-6 mt-8 ">

                                <div className="flex justify-between items-center">
                                    <span className='w-[35%] py-1'>Status :</span>
                                    <div className='w-[44%]'>
                                        <select name="status" id="status" className='bg-[#DCDCDC66] outline-0 px-4 py-[0.4rem] rounded flex-1'>
                                            <option value="Status">{orderDetails.order_status}</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center gap-x-[5.65rem]">
                                    <span className='w-[35%] py-1'>Rider’s Name :</span>
                                    <div className='w-[45%] flex-1'>
                                        <span className=' bg-[#DCDCDC66] rounded px-2 py-[0.4rem] flex-1'>{orderDetails.user?.first_name} {orderDetails.user?.last_name}</span>
                                    </div>

                                </div>
                                <p className='flex justify-between istems-center'>
                                    <span className='w-[57%]'>Created on :</span>
                                    <span className='flex-1'>{moment(orderDetails.created_at).format('LLL')}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Rating :</span>
                                    <span className='flex-1'>
                                        <Image
                                            src={rating}
                                            alt='rating'
                                            width={57}
                                            height={57}
                                        />
                                    </span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Delivered on :</span>
                                    <span className='flex-1'></span>
                                </p>

                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Payment Type :</span>
                                    <span className='flex-1'>{orderDetails?.payment_type}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Amount :</span>
                                    <span className='flex-1'></span>
                                </p>

                                {
                                    orderDetails.delivery_fee !== null && <p className='flex justify-between items-center'>
                                        <span className='w-[57%]'>Delivery fee ::</span>
                                        <span className='flex-1'></span>
                                    </p>
                                }

                                <p className='flex justify-between items-center'>
                                    <span className='w-[57%]'>Total amount :</span>
                                    <span className='flex-1'>₦ {orderDetails.total_amount}</span>
                                </p>
                            </div>
                        </div>}
                    </div>
                </Card>
                <Card width='w-[45%] pb-4 px-8'>
                    <div className='py-6'>
                        <h3 className='text-grey3 font-semibold text-base'>User Details</h3>
                        {isLoading ? <Spinner color='text-primary' size='w-8 h-8 mt-10' /> : <div className="user_details_container text-grey3 mt-4 text-sm flex flex-col gap-y-4">
                            <div className='flex gap-x-2 items-center'>
                                <Image
                                    src={user_profile}//to be replaced by props
                                    alt='user ordering order profile pixs'
                                    priority={true}
                                    height={57}
                                    width={57}
                                />
                                <span className='font-bold text-base'>{orderDetails.user?.first_name} {orderDetails.user?.last_name}</span>
                            </div>
                            <p className='flex gap-x-7 items-center'>
                                <span >Email Address :</span>
                                <span >{orderDetails.user?.email}</span>
                            </p>
                            <p className='flex gap-x-6 items-center'>
                                <span >Phone Number :</span>
                                <span >{orderDetails.user?.phone_number}</span>
                            </p>
                            <p className='flex  '>
                                <span className='w-[33%]'>Pickup Address :</span>
                                <span ></span>
                            </p>
                            <p className='flex gap-x-3 '>
                                <span className='w-[33%]'>Delivery Address:</span>
                                <span ></span>
                            </p>
                        </div>}
                    </div>
                </Card>
            </main >
        </div >

    )
}

export default Page 