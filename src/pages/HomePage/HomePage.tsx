import { ScrapeURL } from '../../interfaces/scrapeInterfaces'
import { ChangeEvent, FormEvent, useState } from 'react'
import { scrapeURL } from '../../services/homePageServices'
import ScrapeForm from './homePageComponents/ScrapeForm'
import ScrapedImages from './homePageComponents/ScrapedImages'
//import axiosInstance from '../../api/axiosInstance'


const HomePage = () => {
    const[pageUrl, setPageUrl] = useState<ScrapeURL>({
        imageURL: ""
    })
    const [scrapedImages, setScrapedImages] = useState<string[]>([])

    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setPageUrl({...pageUrl, [event.target.name]:event.target.value})
    }
    const handleSubmit = async (event:FormEvent)=>{
        event.preventDefault()
     //   console.log(pageUrl);
       

       setScrapedImages(await scrapeURL(pageUrl)) 
    }
    const removeSelectedImage = (index: number)=>{
        scrapedImages.splice(index, 1)
        setScrapedImages([...scrapedImages])
        console.log(`SPLICED! at index ${index}`);
    }
  
    return (
    <div>
        <ScrapeForm
        pageUrl={pageUrl} handleChange={handleChange} handleSubmit={handleSubmit}
        />
        <ScrapedImages scrapedImages={scrapedImages} removeSelectedImage ={removeSelectedImage}/>

       
    </div>
  )
}

export default HomePage