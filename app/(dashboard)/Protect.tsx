"use client";

import { Spinner } from "@/components/ui/Spinner/Spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type props = {
    children?: React.ReactNode;
}

function Protect({ children }: props) {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  

    useEffect(() => {
        setIsLoading(true)
        let validToken = localStorage.getItem("token");

        if (validToken !== null) {
            setIsAuth(true);
            setIsLoading(false)
        }

        else {
            setIsAuth(false);
            setIsLoading(false)
            router.push('/login');
        }

    }, [router])


    if (isLoading) {
        return <Spinner />
    }

    if (isAuth) {
        return (
            <>{children}</>
        )
    }
}
export default Protect;