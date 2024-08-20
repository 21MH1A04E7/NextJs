"use client"
import {useRouter} from "next/navigation"
export default function orderProduct(){
    const router=useRouter()
    const handleOrder=()=>{
        console.log('order placed')
        router.push('/')  //redirect to home page after order is placed
    }
    return(
        <>
            <h1>Order Product Page</h1>
            <button className="bg-slate-500 text-white p-1 m-1 rounded-md active:opacity-85" onClick={handleOrder}>PlaceOrder</button>
        </>
    )
}