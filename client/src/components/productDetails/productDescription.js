import React from 'react'
import Box from '../common/box'

const ProductDescription = ({ product }) => {
  return (
    <Box title="mô tả sản phẩm">
      <div className="product-description">
        <span>{product.description}</span>
      </div>
    </Box>
  )
}
export default ProductDescription
