import RegisterForm from "@/app/ui/auth/registerform";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Login",
    description: "Login to access the application"
}

export default function Page(){
    return(
        <RegisterForm />
    )
}