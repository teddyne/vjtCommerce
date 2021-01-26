import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import color from '../../assets/scss/_colors.scss'

import './scss/_productStar.scss'

const ProductStar = ({ color, size, numberStar, isShowTotalReviews }) => {
  let finalNumberStar = 5

  if (numberStar % 1 === 0 || numberStar % 1 === 0.5)
    finalNumberStar = numberStar

  let productStarTemplate = []

  for (let index = 0; index < Math.floor(finalNumberStar); index++) {
    productStarTemplate.push(
      <FontAwesomeIcon key={index} icon={faStar} size={size} color={color} />
    )
  }
  if (finalNumberStar % 1 === 0.5) {
    productStarTemplate.push(
      <FontAwesomeIcon key='half-star-index' icon={faStarHalf} size={size} color={color} />
    )
  }

  if (isShowTotalReviews) {
    productStarTemplate.push(
      <span key='product-review-index' className="product-review">(Xem 23 đánh giá)</span>
    )
  }
  return <div className="product-star">{productStarTemplate}</div>
}

ProductStar.defaultProps = {
  color: color.colorSts,
  size: "xs",
  isShowTotalReviews: false
}
export default ProductStar
