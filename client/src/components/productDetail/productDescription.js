import React from 'react'
import Box from '../common/box'

import './scss/_productDescription.scss'

const ProductDescription = ({ product }) => {
  return (
    <Box title="mô tả sản phẩm">
      <div className="product-description">
        <span dangerouslySetInnerHTML={{__html: product.description}}></span>
      </div>
    </Box>
  )
}
export default ProductDescription
