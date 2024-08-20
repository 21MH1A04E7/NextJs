import ImageSlider from "@/components/imageSlider"
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoute(){
    const result=serverSideFunction()
    console.log('server route rendering')
    return(
        <div>
            <h1>Server route component</h1>
            <p>{result}</p>
            <ImageSlider/>
        </div>
    )
}