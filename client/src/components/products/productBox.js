import React from 'react'
import './_productBox.scss'

const ProductBox = (props) => {
    return (
        <div className="product-box">
            <div className="box-title">
                <span>{props.title}</span>
            </div>
             {props.children}
        </div>
    )
}
export default ProductBox