import Image from "next/image";
import logo from '../../../../public/images/logo.png'
import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import("@/components/LoginForm/Login"), { ssr: false })


const Login = () => {

  return (
    <div className="bg-[url('/images/login_bg.png')] h-screen bg-cover bg-no-repeat bg-center flex-col flex justify-center items-center text-[#151515]">
      <Image
        src={logo}
        alt={"Swiftmunch logo"}
        width={230}
        height={130}
        className="mb-10"
        property="true"
      />

      <LoginForm />

    </div>
  );
};

export default Login;
/* 
  "email": "wilsontom@gmail.com",
    "password": "wilsontom"
*/