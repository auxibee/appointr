import { Button } from "../button";

export default function AppointmentDetailForm(){
    return (
        <form className="max-w-md mx-auto">
            <p className="mb-4 font-bold text-gray-800">Add Appointment Detail</p>
            <div className="mb-3">
                <label className="mb-1">First Name</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name"></input>
            </div>

            <div className="mb-3">
                <label className="mb-1">Last Name</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last Name"></input>
            </div>
            <div className="text-center">
                <Button>Add</Button>
            </div>
        </form>
    )
}