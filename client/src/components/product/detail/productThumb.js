import React from 'react'
import ImageGallery from 'react-image-gallery'
import _ from 'lodash'

import './scss/_productThumb.scss'

const ProductThumb = ({ product }) => {
    const images = _.map(product.images, image => {
      return {
        original: image.originalUrl,
        thumbnail: image.thumbnailUrl
      }
    })

    return (
        <div className='product-thumb'>
           <ImageGallery showPlayButton={false} items={images} />
        </div>
    )
}

export default ProductThumb