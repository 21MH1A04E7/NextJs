import {Metadata} from "next"
type Props={
    params:{
        productid:string
    }
}
// export const generateMetadata=({params}:Props):Metadata=>{
//     return{
//         title:`product ${params.productid}`
//     }
// }
export const generateMetadata=async({params}:Props):Promise<Metadata>=>{
    // Simulating API call
    const title=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`product ${params.productid}`)
        },100)
       
    })
    return{
        title:`title ${title}`,
        description: `Details about ${title}`
    }
}

export default function productItems({params}:Props){
    return <h1 className="text-center">Product no {params.productid}</h1>
} 