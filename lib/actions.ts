'use server'
import { cookies } from "next/headers";
import { encrypt } from "./lib";
import { redirect } from "next/navigation";

export async function authenticate(_currentState: unknown, formData: FormData) {
    try {

        const res = await fetch("https://swiftmunch.onrender.com/login/", {
            cache: 'no-store',
            method: 'POST',
            body: JSON.stringify({ email: formData.get('email'), password: formData.get('password') }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json();
        switch (data.statusCode) {
            case 200:
                const { access_token, email } = data.data;
                const userdetail = { access_token, email }
                // Create the session
                const expires = new Date(Date.now() + 30 * 1000);
                const session = await encrypt({ userdetail, expires });
         

                // Save the session in a cookie
                cookies().set("session", session, { expires, httpOnly: true });
               

                break;
            case 401:
                data.message;
                break;
            default:
                console.log('An error Occurred');
                console.log(data);

                break;
        }



    } catch (error) {
        console.log("There is an Error");
        console.log(error);

    }
}