import Link from "next/link";

export function CreateAppointmentDetail(){
    return(
        <Link href="/appointment/detail" className="px-3 py-2 bg-blue-500 text-white font-bold">
            Add Detail
        </Link>
    )
}