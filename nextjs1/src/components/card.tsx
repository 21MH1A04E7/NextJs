export default function Card({children}:{
    children:React.ReactNode
}){
    return(
        <div className=" border border-gray-300 bg-white p-4 rounded-md shadow text-lg font-semibold flex items-center justify-center">
            {children}
        </div>
    )
}