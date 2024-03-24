import { useFormStatus } from "react-dom"

type SubmitBtnProps = {
    [rest: string]: any;
    isLoading?: boolean
}

function LoginButton({ ...rest }: SubmitBtnProps) {
    const { pending } = useFormStatus()

    return (
        <div className="form-control my-2">
            <input
                type="submit"
                aria-disabled={pending}
                className='bg-[#E81C4E] text-white font-medium w-full py-2 rounded-xl hover:bg-[#e81c4ff0] cursor-pointer'  {...rest}
                value={pending ? "Login..." : "Login"}
                disabled={pending}
            />
        </div>
    )
}

export default LoginButton;