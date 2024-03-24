import React from 'react'

export type NotPropcsTypes = {
    bg_color?: string
    icon?: React.ReactNode,
    icon_bg?: string,
    notification_count:number
}
function NotificationBox(props: NotPropcsTypes) {
    return (
        <div className={`icon ${props.bg_color} h-12 w-12 rounded-2xl flex justify-center items-center relative`}>
            {props?.icon}
            <div className={`h-5 ${props.icon_bg} w-5 rounded-full absolute bottom-7 left-8 flex justify-center items-center text-[0.8rem] text-white`}>{props.notification_count}</div>
        </div>
    )
}

export default NotificationBox