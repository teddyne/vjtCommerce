import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import _ from 'lodash'

const MultipleUpload = (props) => {
    const [images, setImages] = useState([])

    const handleUploadMultipleFiles = (e) => {
        const urls = _.map(e.target.files, file => {
            return URL.createObjectURL(file)
        })
        setImages(urls)
        props.onUpload(e.target.files)
    }
    const imgStyle = {
        width: `${100 / images.length}%`
    }

    return (
        <>
            <div className='multi-preview'>
                { _.map(images, (url, index) => (<img key={index} style={imgStyle} src={url} alt='...' />))}
            </div>
            <Form.Control type='file' multiple onChange={handleUploadMultipleFiles} />
        </>
    )
}
export default MultipleUpload