import React from 'react'
import { SWIFT_SVG } from "../../../public/images/index";
import Image, { StaticImageData } from 'next/image';
import mealImg from "../../../public/images/mealOrdered.png"
import moment from "moment"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {
    icon: React.ReactNode,
    traction: "increase" | "decrease",
    ratio: string,
    value: number | string,
    title: string
}

function SmallCard({ icon, traction = "decrease", ratio, value, title }: Props) {
    return (
        <div className="card_25 bg-white rounded-lg md:w-[48%] xl:w-[25%] flex md:gap-x-7 md:justify-center xl:justify-between items-center md:px-2 xl:px-6 shadow-[0px_4px_4px_0px_#0000000A]">
            <div className="left flex justify-between items-center w-[4.5rem]">
                {icon}
            </div>
            <div className="right flex flex-col py-5 text-grey3 ">
                <h3 className="md:text-[1.25rem] xl:text-4xl font-extrabold ">{value}</h3>
                <p className="text-sm pb-1">{title}</p>
                <span className="text-[0.63rem] text-[#A3A3A3] flex items-center gap-x-1">
                    {traction == "increase" ? SWIFT_SVG().upTraction() : SWIFT_SVG().downTraction()} {ratio}
                </span>
            </div>
        </div>
    )
}


function Card(props: { children: React.ReactNode, width: string }) {
    return (
        <div className={` bg-white rounded-lg flex justify-between  shadow-[0px_4px_4px_0px_#0000000A]  pt-4 flex-col ${props.width}`}>
            <>
                {props.children}
            </>
        </div>
    )
}
function OrderSmallCard(props: { title: string, width: string, value: number }) {
    return (
        <div className={` bg-white rounded-lg flex justify-between py-2  px-3 flex-col ${props.width} `}>
            < div className="flex xl:flex-row xl:w-full justify-between items-center">
                <h3 className="text-grey6 font-medium text-sm">{props.title}</h3>
                <h4 className="font-extrabold text-lg text-grey3">{props.value}</h4>
            </div>
        </div>
    )
}
function OrderCard(props: { order_id: number, menuitem_image: string | StaticImport, menuitems_name: string | null, qty: number, total_amount: number, width: string, date: string, userPixs: StaticImageData, button?: React.ReactNode }) {
    return (
        <div className={` bg-white rounded-lg flex justify-between py-2 flex-col ${props.width} p-4 lg:px-10 lg:py-6 gap-y-4`}>
            < div className="flex justify-between items-center  ">
                <div className="left flex flex-col">
                    <h3 className="text-grey6 font-extrabold text-sm">Order <span className='text-primary '>{props.order_id}</span></h3>
                    <h4 className="text-sm font-[300] text-[#70727A]">{moment(props.date).format('lll')}</h4>
                </div>
                <div className="right">
                    <Image
                        src={props.userPixs}
                        alt='user profile pixs'
                        height={48}
                        width={48}
                    />
                </div>
            </div>
            <div className="order_Details_top flex-col justify-between gap-x-3 ">
                <div className="flex">
                    <div className="left w-[30%]">
                        <div className='w-[5.5rem] lg:w-[7rem]  rounded-full'>
                            <Image
                                src={props.menuitem_image == null ? mealImg : props.menuitem_image}
                                alt='meal ordered'
                                height={150}
                                className='w-[7rem] h-[7rem] object-cover rounded-full'
                                width={150}
                            />
                        </div>
                    </div>
                    <div className="right w-[70%] flex flex-col gap-y-4">
                        <div className='flex flex-col gap-y-1'>
                            <h4 className='font-bold'>{props.menuitems_name}</h4>
                            <p className='text-base text-[#70727A]'>Crunchy chicken, Coleslaw, Jollof Rice, Fanta Orange 35cl</p>
                            <div className="flex justify-between items-center">
                                <p className="amount text-grey3 text-sm font-medium" >₦{props.total_amount}</p>
                                <p className='qty text-grey3 text-sm font-medium'>Qty: {props.qty}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="order_details_actions flex justify-end gap-x-4 mt-5 xl:mt-1">
                    {props.button}
                </div>
            </div>

        </div>
    )
}

export { SmallCard, Card, OrderSmallCard, OrderCard }