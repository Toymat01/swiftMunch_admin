"use client"


import Header from '@/components/common/Header'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaLessThan } from "react-icons/fa6";
import resturant_cover_photo from "../../../../../public/images/cover-photo.png"
import resturant_pixs from "../../../../../public/images/resturant-profile-photo.png"
import { PrimaryButton, PrimaryOutlineButton } from '@/components/ui/Buttons/Button';
import Input from '@/components/inputFields/input/input';

type Props = {}

const Page = (props: Props) => {
    const [isPrimaryBtn, setIsPrimaryBtn] = useState("yes")

    const handleOrderType = (type: boolean) => {
        console.log(type);

    }
    return (
        <>
            <Header username='Samathan' />
            <main className="w-[95%] mx-auto mt-8">
                <div className="top flex gap-x-6 items-center">
                    <button> <FaLessThan className="text-xl" /></button>
                    <h1 className="text-2xl font-semibold text-grey3">Restaurant | Chicken Republic</h1>
                </div>
                <div className="top relative mt-10 mb-24">
                    <div className="cover-photo w-full rounded-2xl">
                        <Image
                            src={resturant_cover_photo}
                            alt="Resturant cover photo"
                            priority={true}
                            className='rounded-2xl'
                        />
                    </div>
                    <Image src={resturant_pixs} alt='resturant pixs' priority={true} width={150} className='absolute top-[50%] left-[5%]' />
                </div>
                <div className="tabs flex gap-x-6">
                    <PrimaryButton content="Restaurant Details" handleClick={() => handleOrderType(true)} extraClass='py-2' isOutline={isPrimaryBtn} />
                    <PrimaryButton content="Food Items" handleClick={() => handleOrderType(false)} isOutline={"no"} />
                    <PrimaryButton content="Ratings & Reviews" handleClick={() => handleOrderType(false)} isOutline={"no"} />
                    <PrimaryButton content="Configuration" handleClick={() => handleOrderType(false)} isOutline={"no"} />
                </div>
                <div className="tab-content mt-5 mb-10">
                    <form className='grid grid-cols-3 gap-x-4 '>
                        <Input labelText='Restaurant’s Name' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="Chicken Republic" />
                        <Input labelText='Restaurant’s Email' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="Chickenrepublic@gmail.com" />
                        <Input labelText='Restaurant’s Address' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="Lekki, Lagos" />
                        <Input labelText='Restaurant’s Phone Number' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="07098765431" />
                        <Input labelText='License Number' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="RYG345HY" />
                        <Input labelText='Minimum Order' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="₦ 1,500" />
                        <Input labelText='Admin PickUp Commision (%)' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="(%)" />
                        <Input labelText='Admin Delivery Commision (%)' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="(%)" />
                        <Input labelText='Delivery Fee Per Km' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="₦ 100" />
                        <Input labelText='Delivery Time' isLabelRequired={true} addedClass=' flex flex-col my-3' placeholder="Time" />
                    </form>
                    <form className="delivery-area w-1/2 bg-white rounded-lg flex justify-between p-2 flex-col lg:px-6 lg:py-6 gap-y-4">
                        <h3 className='font-bold text-base text-grey3'>Delivery Area</h3>
                        <div className='flex items-center gap-x-4'>
                            <h4 className='text-sm font-semibold textgrey3'>Enter Delivery Radius (KM)</h4>
                            <Input placeholder="70" isLabelRequired={false} />
                            <Input type="submit" value="View on Map" addedClass=' text-white border-0 outline-0' extraClass='bg-primary'/>
                        </div>
                        <p className='text-grey3 text-xs font-medium'>Note: Your Store will serve within the radius you enter</p>
                    </form>

                    <PrimaryButton content="Save Details" handleClick={() => handleOrderType(false)} isOutline={"yes"} extraClass='mt-10'/>
                </div>
                {/* <ResturantUI /> */}

            </main >
        </ >
    )
}

export default Page