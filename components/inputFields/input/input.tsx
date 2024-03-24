import React from "react";

export type InputProps = {
    labelText?: string,
    isLabelRequired?: boolean,
    iconClassName?: string,
    [rest: string]: any,
    addedClass?: string,
    extraClass?: string
}


const Input: React.FC<InputProps> = (props, _ref) => {
    const {
        labelText,
        isLabelRequired,
        iconClassName,
        addedClass,
        extraClass,
        ...rest
    } = props;



    //Validate Password
    const validePassword = () => {

    }

    return (

        <div className={` ${addedClass}`}>
            {
                isLabelRequired &&
                <label htmlFor={labelText} className="font-medium text-sm mb-1">
                    {labelText}
                </label>
            }
            <input className={`icon ${iconClassName} border border-[#D9D9D9] rounded-lg py-2 px-3 outline-none ${extraClass}`} {...rest} />
            {/*  <div className="">
                    <Image src={error_circle} alt='Input field error' className={InputStyles.error_icon} /> 
                <span className="">This field is required</span>
            </div>*/}
        </div>
    );
};

export default Input;