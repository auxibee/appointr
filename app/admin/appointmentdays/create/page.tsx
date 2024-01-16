import AdminCalender from "@/app/ui/admin/calender";

export default function Page(){
    return (
        <div className="mx-auto  w-2/5">
            <div className="text-2xl py-2">Select month to open avialablity</div>
            <div className="flex">
            <div className="max-w-sm  py-8">
                <AdminCalender />
            </div>
            <div className="py-8 ml-5">
                <span className="font-sm text-sm">Default settings</span>
                <ul>
                    <li>* 100 appointments per day</li>
                    <li>* Weekends are excluded</li>
                </ul>
            </div>
            </div>
            <div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create</button>
            </div>
        </div>
    )
}