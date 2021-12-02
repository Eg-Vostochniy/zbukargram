import { useState } from "react"
import { imageUpload } from "../utils/uploadImages"

export const PostModal: React.FC = () => {
    const [imgs, setImgs] = useState([])

    const handleChange = (e: any) => {
        setImgs(e.target.files)
    }
    const handleSubmit = () => {
        imgs.forEach(img => {
            imageUpload(img)
        })

    }

    return (
        <>
            <textarea placeholder='add content for your post' />
            <input onChange={handleChange} multiple type='file' />
            <button onClick={handleSubmit}>Post</button>
        </>
    )
}