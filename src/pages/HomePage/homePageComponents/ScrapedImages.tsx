import { useEffect } from 'react'
import ImageCard from './ImageCard'

interface ScrapedImagesProps{
    scrapedImages: string[];
    removeSelectedImage: (index: number)=>void
    
}

const ScrapedImages = ({scrapedImages, removeSelectedImage}: ScrapedImagesProps) => {
    useEffect(()=>{

    }, [scrapedImages.length])
  return (
     <div>
        { scrapedImages.length > 0?
         <div style={{display:"flex", flexWrap:"wrap", gap: "10px"}}>
                {scrapedImages.map((image, index)=>{
                    return(
                        <ImageCard key={index} imgUrl={image} removeSelectedImage={removeSelectedImage} id={index}/>
                    )
                })}
            </div>:
            <div>
                <h1>NOTHING SCRAPED</h1>
            </div>
}
     </div>
  )
}

export default ScrapedImages