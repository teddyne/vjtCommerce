import React from 'react'

const ProductThumb = ({ product }) => {
    return (
        <div className="product-thumb">
           <img src={product.thumbUrl} alt={product.name} />
        </div>
    )
}

export default ProductThumb