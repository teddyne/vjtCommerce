import React from 'react'
import ProductItem from './product-item'

const ProductBox = ({ title, products }) => {
    return (
        <div className="product-box">
            <div className="box-title">
                <p>{title}</p>
            </div>
            <ProductItem products={products} />
        </div>
    )
}
export default ProductBox