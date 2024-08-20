// export const fetchCache="default-cache";
import {cookies} from 'next/headers'
type product={
    id:number,
    title:string,
    price:number,
    description:string
}
export default async function ProductPage(){
    //by default datac cache
    const response=await fetch('http://localhost:3001/products')
    const products=await response.json()
    
    //no cache ,every time featching data from ds server not from chaching
    // const response=await fetch('http://localhost:3001/products',{
    //     cache:"no-store"
    // })

    //2nd dynamic catching 
    // const response=await fetch('http://localhost:3001/products');
    // const products=await response.json()
    // //catch
    // const cookiesStore=cookies()
    // const theme=cookiesStore.get('theme')
    // //dynamic funtion

    // const detailsResponse=await fetch('http://localhost:3001/products/1')
    // const details=await detailsResponse.json()
    //not catch
    return(
        <div>
            {products.map((items:product)=>{
                return(
                    <div key={items.id} className="flex max-w-sm justify-between bg-slate-200 m-1 text-black p-1 rounded-lg">
                        <h2 className="font-bold">{items.title}</h2>
                        <p>{items.description}</p>
                        <p>Price: ${items.price}</p>
                    </div>
                )
            })}
        </div>
    )
}