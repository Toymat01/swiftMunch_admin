import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

function Menu(props: { extra_class?: string, menu_img: string | StaticImport, menu_name: string, resturants_number: number }) {
    return (
        <div className={`flex flex-col ${props.extra_class} rounded-2xl bg-white `}>
            <div className="top w-full">
                <Image
                    src={props.menu_img}
                    alt={props.menu_name}
                    priority={true}
                    placeholder="blur"
                    height={250}
                    width={450}
                />

            </div>
            <div className="bottom p-4">
                <h2 className='text-grey3 font-bold'>{props.menu_name}</h2>
                <p className='text-[#E81C4E] text-sm mt-1 font-medium'>{props.resturants_number} Resturants</p>
            </div>
        </div>
    )
}

export default Menu