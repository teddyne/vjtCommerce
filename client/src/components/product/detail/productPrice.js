import React from 'react'
import { formatCurrency } from '../../../helpers/stringHelper'

import './scss/_productPrice.scss'

const ProductPrice = ({ price, discount }) => {
    const finalPrice = price - ((price * discount) / 100)
    return (
      <div className='product-detail-price'>
          <div className='final-price'>
             {formatCurrency(finalPrice)}
          </div>
          <span className='original-price'>{formatCurrency(price)}</span>
          <div className='discount'>giảm {discount}%</div>
      </div>
    )
}
export default ProductPrice