import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import _ from 'lodash'

const MultipleUpload = () => {
    const [images, setImages] = useState([])
    const handleUploadMultipleFiles = (e) => {
        console.log('file', e.target.files)
        const urls = _.map(e.target.files, file => {
            return URL.createObjectURL(file)
        })
        setImages(urls)
        console.log('images', images)
    }
    const imgStyle = {
        width: `${100 / images.length}%` 
    }

    return (
        <>
            <div className="multi-preview">
                { _.map(images, url => (<img style={imgStyle} src={url} alt="..." />))}
            </div>
            <Form.Control type="file" multiple onChange={handleUploadMultipleFiles} />
        </>
    )
}
export default MultipleUpload