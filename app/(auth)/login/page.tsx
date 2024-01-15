import LoginForm from "@/app/ui/auth/loginform";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Login",
    description: "Login to access the application"
}

export default function Login(){
    return(
        <LoginForm />
    )
}