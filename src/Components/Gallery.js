import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    const data = props.data.result.read()

    const display = data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}


export default Gallery