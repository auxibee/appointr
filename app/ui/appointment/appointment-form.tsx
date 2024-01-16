'use client'
import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { Button } from "../button"

export default function AppointmentForm(){
    return(
        <div>
            <div className="py-4 max-w-md mx-auto">
                <p className="text-center mb-3">Select Appointment day</p>
                <div className="mb-4">
                 <AppointmentCalender />
                </div>
                <div className="text-center">
                    <Button>Book appointment</Button>
                </div>
            </div>    
        </div>
    )
}




function AppointmentCalender(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    )
}