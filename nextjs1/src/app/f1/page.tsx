import Link from "next/link";

export default function F1(){
    return (
       <div className="flex flex-col items-center">
            <h1>f1 pages</h1>
            <Link href="/f1/f2" className="text-blue-500 underline">F2</Link>
            
       </div>
    )
}