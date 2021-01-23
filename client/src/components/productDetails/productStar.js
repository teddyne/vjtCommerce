import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import './scss/_productStar.scss'

const ProductStar = ({ color, size, numberStar }) => {
  let finalNumberStar = 5

  if (numberStar % 1 === 0 || numberStar % 1 === 0.5)
    finalNumberStar = numberStar

  let productStarTemplate = []

  for (let index = 0; index < Math.floor(finalNumberStar); index++) {
    productStarTemplate.push(
      <FontAwesomeIcon icon={faStar} size={size} color={color} />
    )
  }
  if (finalNumberStar % 1 === 0.5) {
    productStarTemplate.push(
      <FontAwesomeIcon icon={faStarHalf} size={size} color={color} />
    )
  }

  productStarTemplate.push(
    <span className="product-review">(Xem 23 đánh giá)</span>
  )
  return <div className="product-star">{productStarTemplate}</div>
}
export default ProductStar
