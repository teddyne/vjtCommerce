import React from 'react'
import './_productPrice.scss'
import { formatCurrency } from '../../helpers/stringHelper'

const ProductPrice = ({ price, discount }) => {
    const finalPrice = price - ((price * discount) / 100)
    return (
      <div className="product-detail-price">
          <div className="final-price">
             {formatCurrency(finalPrice)} ₫
          </div>
          <span className="original-price">{formatCurrency(price)} ₫</span>
          <div className="discount">giảm {discount}%</div>
      </div>
    )
}
export default ProductPrice