"use client"
import {notFound} from "next/navigation"

const generateRandom=(n:number):number=>{
    return Math.floor(Math.random()*n); //returns a random integer between 1 and n (inclusive)
}
export default function productReview({params}:{
    params:{
        productid:string,
        reviewid:string,
    }
}){
    const random=generateRandom(2)
    if(random===1){
        throw new Error('Error loading review')
    }
    if(parseInt(params.reviewid)>1000){
        notFound()
    }
    return (
        <h1 className="text-center">prouct no {params.productid} and review {params.reviewid}</h1>
    )
}