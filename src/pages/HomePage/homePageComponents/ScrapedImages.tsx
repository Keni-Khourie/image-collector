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
     <div style={{display:"flex", flexWrap:"wrap", gap: "10px"}}>
            {scrapedImages.map((image, index)=>{
                return(
                    <ImageCard key={index} imgUrl={image} removeSelectedImage={removeSelectedImage} id={index}/>
                )
            })}

        </div>
  )
}

export default ScrapedImages