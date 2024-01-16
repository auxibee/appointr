import AppointmentList from "@/app/ui/admin/appointmentlist";
import AdminCalender from "@/app/ui/admin/calender";

export default function Page(){
    return(
        <div className="container grid grid-cols-12 gap-x-2 py-5">
            <div className="col-span-3">
                <AdminCalender />
                <p className="py-3">Select day to view appointments</p>
            </div>
            <div className="col-span-9">
                <AppointmentList />
            </div>
        </div>
    )
}