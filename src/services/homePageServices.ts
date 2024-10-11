import axiosInstance from "../api/axiosInstance";
import { ScrapeURL } from "../interfaces/scrapeInterfaces";

export const scrapeURL = async (reqBody:ScrapeURL)=>{
if(!reqBody.imageURL){
    console.log("No link to scrape");
    return
}
try {
    const res = await axiosInstance.post('/', reqBody)
    console.log(reqBody);
    if(res && res.data.images){
    console.log(res.data.images);
    return res.data.images
}
if(res && res.data.error){
    console.log(res.data.error);
    return []
}
} catch (error) {
    console.log("Error collecting info");
    console.log(error);
}



}