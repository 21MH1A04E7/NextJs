export default function RootLayout({children}:{
    children: React.ReactNode
}){
    return(
        <>
            {children}
            <h1 style={{
                backgroundColor: 'brown',
                color: 'white',
                padding: '10px',
                margin: '10px'
            }}>prouct layout</h1>
        </>
    )
}