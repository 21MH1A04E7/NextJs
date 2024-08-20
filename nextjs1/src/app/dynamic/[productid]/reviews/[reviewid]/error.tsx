"use client"
export default function ErrorBoundary({error,reset}:{
    error:Error
    reset:()=>void
}){
    return (
        <>
            <div className="bg-slate-300 p-[1rem] text-center text-red-400 font-bold">{error.message}</div>
            <button className="py-1 px-3 bg-slate-400 rounded-md mx-16" onClick={reset}>Retry</button>
        </>
    )
}