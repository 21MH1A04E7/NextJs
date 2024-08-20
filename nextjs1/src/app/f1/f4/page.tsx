import Link from "next/link";

export default function F4(){
    return (
        <div className="flex flex-col items-center">
            <h1>F4 pages</h1>
            <Link href="/f1/f3" className="underline text-blue-600">F3 </Link>
            <Link href="/about" className="underline text-blue-600">about </Link>
        </div>
    )
}