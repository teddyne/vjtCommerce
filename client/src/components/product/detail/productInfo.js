import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from '../../../assets/scss/_colors.scss'
import QuantityInput from '../../common/quantityInput'
import { Context } from '../../../store'
import CustomToast from '../../common/customToast'
import SoloButton from '../../common/button'
import UserService from '../../../services/user.service'
import { SET_CURRENT_USER } from '../../../store/action'
import { updateLocalStorage } from '../../../helpers/commonHelper'
import _ from 'lodash'
import { beginLoading, endLoading } from '../../../services/loadingBar.service'
import { QualityActionEnum, LocalStorageType } from '../../../enums'

import './scss/_productInfo.scss'

const ProductInfo = ({ product }) => {
  const [state, dispatch] = useContext(Context)
  const history = useHistory()
  const [showingAddedToast, setShowingAddedToast] = useState(false)
  const [productQuantity, setProductQuantity] = useState(1)

  const handleClickBuyNow = async () => {
    if (state.currentUser) {
      beginLoading(dispatch)
      setShowingAddedToast(true)
      const payload = {
        _productId: product._id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        discountedPrice: product.price - ((product.price * product.discount) / 100),
        quantity: productQuantity,
        thumbnail: product.images[0]
      }
      const result = await UserService.updateCarts(state.currentUser._id, payload)
      updateLocalStorage(result.data.carts, LocalStorageType.CART)
      dispatch({ type: SET_CURRENT_USER, payload: result.data })
      endLoading(dispatch)
    } else {
      history.push(`/sign-in?from=products/${product._id}`)
    }
  }

  const handleChangeQuantity = (action) => {
    action === QualityActionEnum.ADD ? setProductQuantity(productQuantity + 1) : setProductQuantity(productQuantity - 1)
  }

  return (
    <div className='product-info'>
      <div className='product-name'>{product.name}</div>
      <ProductStar psKey={'product-info'} isShowTotalReviews={false} color={color.colorSts} size='sm' numberStar={0} />
      <ProductPrice price={product.price ?? 0} discount={product.discount ?? 0} />
      <QuantityInput
        quantity={productQuantity}
        onClickMinus={() =>  handleChangeQuantity(QualityActionEnum.MINUS)}
        onClickAdd={() =>  handleChangeQuantity(QualityActionEnum.ADD)}
      />
      <SoloButton btnStyle='sweet-red' text={'Mua Ngay'} onClick={handleClickBuyNow} />
      <CustomToast isShow={showingAddedToast} onClose={() => setShowingAddedToast(false)} />
    </div>
  )
}
export default ProductInfo
