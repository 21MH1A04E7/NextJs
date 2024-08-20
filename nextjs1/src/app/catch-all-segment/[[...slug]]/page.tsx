export default function Docs({params}:{
    params:{
        slug:string[]
    }
}){
    if(params.slug?.length==2){
        return <h1>
            Documentaion for {params.slug[0]} and concept {params.slug[1]}
        </h1>
    }
    if(params.slug?.length==1){
        return <h1>
            Documentaion for {params.slug[0]}
        </h1>
    }
    return <h1>Docs pages</h1>
}
//catch-all-segment 
//capture all segment map in a single route 
//option catch-all-segment [[...slug]]
//[..slug] array [0,1,2]
//url1/url2/url3 params array 