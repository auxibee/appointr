import { Metadata } from "next"
import AppointmentDetailList from "../ui/appointment/appointment-detail-list"
import { Button } from "../ui/button"
import { CreateAppointmentDetail } from "../ui/appointment/buttons"

const metadata: Metadata = {
    title: 'Appointment Detail',
    description: 'Add appointment details'
}

export default function Page(){
    return(
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <p>Note : maximum of two applicants can be added</p>
                <CreateAppointmentDetail />
            </div>
            <AppointmentDetailList />
        </div>
    )
}