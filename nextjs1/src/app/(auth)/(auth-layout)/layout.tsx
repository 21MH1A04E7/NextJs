export default function RootLayout({children}:{
    children:React.ReactNode
}){
    return (
        <>
            <h1 className="text-blue-500 bg-yellow-200 text-center p-2">inner layout</h1>
            {children}
        </>
    )
}