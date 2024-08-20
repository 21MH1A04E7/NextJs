
import {cookies} from 'next/headers'
export default function AboutPage(){
    const cookiestore=cookies()
    console.log(cookiestore.get('token'))
    console.log("About Server Componenet")
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}