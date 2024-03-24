import { Spinner } from "@/components/ui/Spinner/Spinner";
import React from "react";

type SubmitBtnProps = {
    valu: string,
    [rest: string]: any;
    isLoading: boolean
}


export const SubmitBtn = ({ valu, isLoading, ...rest }: SubmitBtnProps) => {
   

    return (
        <div className="form-control my-2">
            <input
                type="submit"
                className='bg-[#E81C4E] text-white font-medium w-full py-2 rounded-xl hover:bg-[#e81c4ff0] cursor-pointer'
                value={isLoading ? "Logging in..." : valu}
                {...rest}
                disabled={isLoading} />
        </div>

    )
}