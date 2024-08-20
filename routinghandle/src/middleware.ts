import {NextResponse,NextRequest} from 'next/server'


export function middleware(request:NextRequest) {
    const response=NextResponse.next();
    const themePreference=request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }
    response.headers.set('custome-header',"custome value")
    return response

    //1st
    // if(request.nextUrl.pathname==='/profile'){ //conditional middleware
    //     return NextResponse.redirect(new URL('/',request.url))
    // }
    
    //2nd
    // return NextResponse.redirect(new URL('/',request.url))
}

// type Config={
//     matcher:string,
// }

// //this will redirect all requests to /hello  to /
// export const config:Config={
//     matcher:'/hello'
// }