import './scss/_productInfo.scss'

import React, { useContext, useState } from 'react'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from '../../assets/scss/_colors.scss'
import QualityInput from './qualityInput'
import Button from 'react-bootstrap/Button'
import { Context } from '../../store/store'
import { ADD_TO_CARTS } from '../../store/action'
import CustomToast from '../common/customToast'

const ProductInfo = ({ product }) => {
  const [state, dispatch] = useContext(Context)
  const [showingAddedToast, setShowingAddedToast] = useState(false)

  const handleClickBuyNow = () => {
    dispatch({ type: ADD_TO_CARTS, payload: product })
    setShowingAddedToast(true)
  }

  return (
    <div className="product-info">
      <div className="product-name">{product.name}</div>
      <ProductStar isShowTotalReviews={true} color={color.colorSts} size="sm" numberStar={4.5} />
      <ProductPrice price={product.price} discount={product.discount} />
      <QualityInput />
      <Button className="btn-buy-right-now" onClick={handleClickBuyNow}>Mua Ngay</Button>
      <CustomToast isShow={showingAddedToast} onClose={() => setShowingAddedToast(false)} />
    </div>
  )
}
export default ProductInfo
