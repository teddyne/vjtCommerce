import React from 'react'
import ProductDetailBox from './productDetailBox'

import './scss/_productDescription.scss'

const ProductDescription = ({ product }) => {
  return (
    <ProductDetailBox title="mô tả sản phẩm">
      <div className="product-description">
        <span>{product.description}</span>
      </div>
    </ProductDetailBox>
  )
}
export default ProductDescription
