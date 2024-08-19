interface ImageCardProps{
    imgUrl: string;
    removeSelectedImage: (index: number)=>void
    id:number
}

const ImageCard = ({imgUrl, removeSelectedImage, id}:ImageCardProps) => {
   const blob = new Blob([imgUrl])
    const downloadURL = window.URL.createObjectURL(new Blob([blob]))
  return (
    <div style={{border:"2px solid black"}}>
        <div>
            <img src={imgUrl} style={{height:"150px", width: "150px"}}/>
        </div>
        <div>
            <button 
            onClick={()=>{removeSelectedImage(id)}}
            style={{backgroundColor:"paleturquoise"}}>DELETE</button>
            <a href={downloadURL} download={`Image Collector image - ${id}.jpg`}>
                <button typeof="button">DOWNLOAD</button></a>
        </div>
    </div>
  )
}

export default ImageCard