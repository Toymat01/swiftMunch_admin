"use client"
import { toast } from 'react-toastify';
import Input from "@/components/inputFields/input/input";
/* import { useFormState } from 'react-dom';
import LoginButton from './LoginButton';
import { authenticate } from '@/lib/actions'; */
import { useState } from 'react';
import axios from 'axios';
import { SubmitBtn } from '../inputFields/input/submit-input-btn';
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {}

const LoginForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [credentials, setCredentials] = useState<{ email: string, password: string }>({ email: "", password: "" });
    const router = useRouter()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await axios.post(API_URL!, { email: credentials.email, password: credentials.password });
            let data = await res.data;
            if (data.statusCode == 200) {
                const { access_token } = data.data;

                localStorage.setItem('token', JSON.stringify(access_token));
                setIsLoading(false);
                router.push('/');
            }
        }
        catch (error: any) {
            let err = error?.response?.data;
            setIsLoading(false);

            switch (err?.status) {
                case 401:
                    toast.error(`Incorrect Password`)
                    break;
                case 404:
                    toast.error(`Invalid Credentials entered`)
                    break;

                default:
                    toast.error(`An Error Occurred!`)
                    break;
            }

        }
    }


    return (
        <div className="login_form w-[92%] h-[60%] md:w-[60%] md:h-[45%] bg-white rounded-2xl xl:h-[70%] xl:w-[30%] flex px-12 flex-col justify-center">
            <h2 className="text-3xl font-medium mb-6 xl:mb-10 text-left">Welcome back!</h2>
            <form className="flex  flex-col" onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    value={credentials.email}
                    labelText="Email Address"
                    isLabelRequired={true}
                    iconClassName="w-full text-sm"
                    addedClass="flex flex-col mb-6"
                />
                <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={credentials.password}
                    placeholder="Password"
                    labelText="Password"
                    isLabelRequired={true}
                    iconClassName="w-full text-sm"
                    addedClass="flex flex-col mb-2"
                />
                <span className="flex gap-x-1 mb-6">
                    <input type="checkbox" />
                    <span className="text-[0.7rem] font-medium">Remind me</span>
                </span>
                {/* <LoginButton /> */}
                <SubmitBtn valu="Log in" isLoading={isLoading} />
                {/*  <p className="text-[0.8rem]">Don’t have an account? <Link href="register" className="text-[#E81C4E] underline font-medium"> SignUp here</Link></p> */}


            </form>
        </div>
    )
}

export default LoginForm;