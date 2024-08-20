import { NextRequest } from "next/server";
import{headers,cookies} from 'next/headers'

export async function GET(request:NextRequest):Promise<Response> {
    // console.log(request.headers)//we will get the response in array
    //1st method 
    const requestheader=new Headers(request.headers)
    console.log(requestheader.get('Authorization'))

    //2nd method
    cookies().set("results-page","200")
    console.log(cookies().get("results-page"))
    cookies().delete("results-page")

    //1nd method
    const theme=request.cookies.get("theme")
    console.log(theme)
    
    
    //2nd method  
    const headerList=headers()//headers() function
    // console.log(header)
    console.log(headerList.get('Authorization'))
    return new Response('<h1>hii</h1>',{//to set header we need to return response with new header
        headers:{
            "Content-type":"text/html",
            "Set-Cookie":"theme=dark"//1st method
        },
        status:200,
    }) 
}