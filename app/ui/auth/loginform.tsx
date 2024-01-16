import Link from "next/link";
import { Button } from "../button";

export default function LoginForm(){
    return(
       

<form className="max-w-sm mx-auto py-8">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@example.com" required></input>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="aueuyI$fdf" required></input>
  </div>
  
  <Button> Login </Button>
  <p className="mt-2">Don't have an account ? <Link className="text-blue-500" href="/register"> Register</Link></p>
</form>

    )
}