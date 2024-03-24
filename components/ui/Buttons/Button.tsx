import React from 'react'

type BtnType = {
    content?: React.ReactNode,
    icon?: React.ReactElement,
    extraClass?: string,
    isOutline?: string,
    handleClick?: () => void
    [rest: string]: any;
}
export const PrimaryOutlineButton = (props: BtnType) => {
    return (
        <button className={`flex items-center border border-[#E81C4E] rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-[#E81C4E] hover:bg-[#E81C4E] hover:text-white min-w-30 ${props.extraClass ? props.extraClass : ""}`} onClick={props.handleClick}  {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}
export const PrimaryButton = (props: BtnType) => {

    return (
        <button className={`flex items-center border ${props?.isOutline == "yes" ? "bg-primary text-white hover:bg-[#E81C4E]" : "border-primary border-1 text-primary hover:bg-[#fb4270] hover:text-white"}  rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold   min-w-30 ${props.extraClass ? props.extraClass : ""}`} onClick={props.handleClick} {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}
export const SuccessButtonOutline = (props: BtnType) => {
    return (
        <button className='flex items-center border bg-white rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-success hover:bg-success hover:text-white min-w-30 border-success' onClick={props.handleClick}  {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}
export const SuccessButton = (props: BtnType) => {
    return (
        <button className={`flex items-center border bg-success rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-white hover:bg-success hover:text-white min-w-30 ${props.extraClass ? props.extraClass : ""}`} onClick={props.handleClick}  {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}
export const PendingButtonOutline = (props: BtnType) => {
    return (
        <button className={`flex items-center border bg-white border-pending rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-pending hover:bg-pending ${props.extraClass ? props.extraClass : ""} hover:text-white min-w-30`} onClick={props.handleClick}  {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}
export const PendingButton = (props: BtnType) => {
    return (
        <button className={`flex items-center border bg-pending rounded-lg px-5 py-1.5 text-[0.8rem] font-semibold text-white hover:bg-pending hover:text-white min-w-30 ${props.extraClass ? props.extraClass : ""}`} onClick={props.handleClick}  {...props.rest}>
            {props.icon && props.icon}   {props.content}
        </button>
    )
}

const Button = { PrimaryButton, PrimaryOutlineButton, SuccessButtonOutline, PendingButton, PendingButtonOutline, SuccessButton };
export default Button;