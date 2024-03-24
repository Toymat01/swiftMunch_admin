import { ReactNode } from "react";
import "../../(dashboard)/globals.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Login",
  description: "Login below"
}
export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        <ToastContainer />
      </body>
    </html>


  )

}
