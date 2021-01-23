import React from 'react'
import './scss/_productDetailBox.scss'

const ProductDetailBox = (props) => {
    return (
        <div className="product-detail-box">
            <div className="product-detail-box-title">{props.title}</div>
            {props.children}
        </div>
    )
}
export default ProductDetailBox