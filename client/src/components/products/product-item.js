import React from 'react'

const ProductItem = ({ products }) => {
    return (
        products.map((product) => {
            return (
                <div className="product-item">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            )
        })
    )
}
export default ProductItem