import React from 'react'
import ImageGallery from 'react-image-gallery'
import './_productThumb.scss'

const ProductThumb = ({ product }) => {
    const imnages = [
        {
          original: product.imageUrl,
          thumbnail: product.thumbUrl
        }
      ]

    return (
        <div className="product-thumb">
           <ImageGallery showPlayButton={false} items={imnages} />
        </div>
    )
}

export default ProductThumb