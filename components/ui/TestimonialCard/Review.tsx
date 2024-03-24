import Image, { StaticImageData } from 'next/image'
import React from 'react'
import rating from "../../../public/images/starts.png"

type IProps = {
    profile_pixs: StaticImageData,
    time: string,
    text: string,
    user_name: string,
    mealImg: StaticImageData,
    rate: number,
    style?: string
}
function Review(props: IProps) {
    

    return (
        <div className={` bg-white rounded-lg flex justify-between items-center shadow-[0px_4px_4px_0px_#0000000A] ${props.style == undefined ? 'w-[30%]' : props.style}  pt-4 pl-6 pb-4 relative`}>
            <div className="left w-[66%] flex flex-col gap-y-3">
                <div className="top flex items-center gap-x-2">
                    <div className="profile_pixs">
                        <Image
                            src={props.profile_pixs} alt='user'
                            height={40}
                            width={40}
                            className='rounded'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <h3 className='text-grey3 font-extrabold'>{props.user_name}</h3>
                        <h5 className='text-grey5 font-bold -mt-1 text-[0.69rem]'>{props.time}</h5>
                    </div>
                </div>
                <p className='text-grey3 font-medium text-[0.75rem]'>
                    {props.text}
                </p>
                <div className="rating flex items-center gap-x-2">
                    <Image
                        src={rating}
                        alt='rating'

                    />
                    <span className='font-bold text-grey3 text-sm'>{props.rate}</span>
                </div>
            </div>

            <Image
                src={props.mealImg}
                alt='testimonial image'
                priority={true}
                height={150}
                width={150}
                className='absolute -right-14 top-8'
            />

        </div>
    )
}

export default Review