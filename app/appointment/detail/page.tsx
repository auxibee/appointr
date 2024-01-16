import AppointmentDetailForm from "@/app/ui/appointment/appointment-detail-form";
import { Metadata } from "next";

const metadata : Metadata = {
    title: 'Detail',
    description: 'Add appointment details'
}

export default function Page(){
    return(
        <AppointmentDetailForm />
    )
}