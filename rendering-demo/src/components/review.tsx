export default async function ProductReview(){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    return <h1>Product Review</h1>
}