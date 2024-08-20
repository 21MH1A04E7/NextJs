'use client'
import {useState} from 'react'
export default function DashboardPage(){
    console.log("Dashboard client component ")
    const [inputValue, setInputValue] = useState('')
    return(
        <div className="flex flex-col">
            <h1>Dashboard Page</h1>
            <p>Welcome to your dashboard page.</p>
            <input className='text-black max-w-xs' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <p>Input value: {inputValue}</p>
        </div>
    )
}