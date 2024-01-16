import AppointmentForm from "@/app/ui/appointment/appointment-form";
import { Metadata } from "next";

const metadata : Metadata = {
    title: 'Book appointment',
    description: 'Book appointment'
}

export default function Page(){
    return(
        <AppointmentForm />
    )
}