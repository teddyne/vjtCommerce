import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import color from '../../../assets/scss/_colors.scss'
import { Constant } from '../../../constants'

import './scss/_productStar.scss'

const ProductStar = ({ color, emptyColor, size, numberStar, isShowTotalReviews, isShowEmptyStar, psKey }) => {
  let finalNumberStar = 5
  const totalStarRendered = Math.ceil(numberStar)
  const totalEmptyStar = Constant.MAX_STAR - totalStarRendered

  if (numberStar % 1 === 0 || numberStar % 1 === 0.5)
    finalNumberStar = numberStar

  let productStarTemplate = []

  for (let index = 0; index < Math.floor(finalNumberStar); index++) {
    productStarTemplate.push(
      <FontAwesomeIcon key={`${psKey}-${index}`} icon={faStar} size={size} color={color} />
    )
  }
  if (finalNumberStar % 1 === 0.5) {
    productStarTemplate.push(
      <FontAwesomeIcon key={`${psKey}-half-star`} icon={faStarHalf} size={size} color={color} />
    )
  }

  if (isShowTotalReviews) {
    productStarTemplate.push(
      <span key='product-review-index' className='product-review'>(Xem 23 đánh giá)</span>
    )
  }

  if (isShowEmptyStar && totalEmptyStar > 0) {
    for (let index = 0; index < totalEmptyStar; index++) {
      productStarTemplate.push(
        <FontAwesomeIcon key={`${psKey}-${index}-empty`} icon={faStar} size={size} color={emptyColor} />
      )
    }
  }

  return <div className='product-star' key={psKey}>{productStarTemplate}</div>
}

ProductStar.defaultProps = {
  color: color.color_sts,
  emptyColor: color.color_gray,
  size: 'xs',
  isShowTotalReviews: false,
  isShowEmptyStar: false
}
export default ProductStar
