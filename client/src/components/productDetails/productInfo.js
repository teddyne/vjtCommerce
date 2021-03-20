import './scss/_productInfo.scss'

import React, { useContext, useState } from 'react'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from '../../assets/scss/_colors.scss'
import QuantityInput from '../common/quantityInput'
import Button from 'react-bootstrap/Button'
import { Context } from '../../store/store'
import { ADD_TO_CARTS } from '../../store/action'
import CustomToast from '../common/customToast'

const ProductInfo = ({ product }) => {
  const [state, dispatch] = useContext(Context)
  const [showingAddedToast, setShowingAddedToast] = useState(false)

  const handleClickBuyNow = () => {
    const cart = {
      name: product.name,
      price: product.price,
      quantity: state.itemQuantity
    }
    dispatch({ type: ADD_TO_CARTS, payload: product })
    setShowingAddedToast(true)
    console.log('carts', state.carts)
    const currentCartNumber = localStorage.getItem('carts') ?? 0
    localStorage.setItem('carts', parseInt(currentCartNumber) + 1)
  }

  return (
    <div className="product-info">
      <div className="product-name">{product.name}</div>
      <ProductStar psKey={'product-info'} isShowTotalReviews={true} color={color.colorSts} size="sm" numberStar={4.5} />
      <ProductPrice price={product.price ?? 0} discount={product.discount ?? 0} />
      <QuantityInput />
      <Button className="btn-buy-right-now" onClick={handleClickBuyNow}>Mua Ngay</Button>
      <CustomToast isShow={showingAddedToast} onClose={() => setShowingAddedToast(false)} />
    </div>
  )
}
export default ProductInfo
