import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from '../../assets/scss/_colors.scss'
import QuantityInput from '../common/quantityInput'
import { Context } from '../../store/store'
import CustomToast from '../common/customToast'
import SoloButton from '../common/button'
import UserService from '../../services/user.service'
import { SET_CURRENT_USER } from '../../store/action'
import { updateLocalStorage } from '../../helpers/commonHelper'
import _ from 'lodash'

import './scss/_productInfo.scss'

const ProductInfo = ({ product }) => {
  const [state, dispatch] = useContext(Context)
  const [showingAddedToast, setShowingAddedToast] = useState(false)
  const history = useHistory()

  const handleClickBuyNow = async () => {
    if (state.currentUser) {
      setShowingAddedToast(true)
      const payload = {
        _productId: product._id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        discountedPrice: product.price - ((product.price * product.discount) / 100),
        quantity: state.itemQuantity,
        thumbnail: product.images[0]
      }
      const result = await UserService.updateCarts(state.currentUser._id, payload)
      updateLocalStorage(result.data.carts, 'cart')
      dispatch({ type: SET_CURRENT_USER, payload: result.data })
    } else {
      history.push(`/sign-in?from=products/${product._id}`)
    }
  }

  return (
    <div className="product-info">
      <div className="product-name">{product.name}</div>
      <ProductStar psKey={'product-info'} isShowTotalReviews={false} color={color.colorSts} size="sm" numberStar={0} />
      <ProductPrice price={product.price ?? 0} discount={product.discount ?? 0} />
      <QuantityInput />
      <SoloButton btnStyle='sweet-red' text={'Mua Ngay'} onClick={handleClickBuyNow} />
      <CustomToast isShow={showingAddedToast} onClose={() => setShowingAddedToast(false)} />
    </div>
  )
}
export default ProductInfo
