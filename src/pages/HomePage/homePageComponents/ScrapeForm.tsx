import { ChangeEvent, FormEvent } from 'react'
import { ScrapeURL } from '../../../interfaces/scrapeInterfaces';

interface ScrapeFormProps{
    pageUrl: ScrapeURL
    handleChange: (event:ChangeEvent<HTMLInputElement>)=>void;
    handleSubmit: (event:FormEvent)=>Promise<void>;
}

const ScrapeForm = ({pageUrl, handleChange, handleSubmit}: ScrapeFormProps) => {
  return (
    <div>
            <form>
                <div>
                    <label>IMAGE URL</label>
                    <input
                    id="imageURLInput"
                    name='imageURL'
                    type='text'
                    placeholder='enter page link here'
                    value={pageUrl.imageURL}
                    onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>SCRAPE!</button>
            </form>
        </div>
  )
}

export default ScrapeForm