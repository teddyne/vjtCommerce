import React, { useContext, useState } from 'react'
import ProductStar from './productStar'
import ProductPrice from './productPrice'
import color from '../../assets/scss/_colors.scss'
import QuantityInput from '../common/quantityInput'
import { Context } from '../../store/store'
import { ADD_TO_CARTS } from '../../store/action'
import CustomToast from '../common/customToast'
import SoloButton from '../common/button'
import CartService from '../../services/cart.service'
import _ from 'lodash'

import './scss/_productInfo.scss'

const ProductInfo = ({ product }) => {
  const [state, dispatch] = useContext(Context)
  const [showingAddedToast, setShowingAddedToast] = useState(false)

  const homeUserId = "60726befdaa6d52624a91435"
  const companyUserId = "606fd4b8d54f8b8dbc05939d"

  const handleClickBuyNow = () => {
    dispatch({ type: ADD_TO_CARTS, payload: product })
    setShowingAddedToast(true)

    const payload = {
      _userId: homeUserId,
      _productId: product._id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      quantity: state.itemQuantity,
      thumbnail: product.images[0]
    }

    addCart(payload).then(() => {
      console.log('carts', state.carts)
      const currentCartNumber = localStorage.getItem('carts') ?? 0
      localStorage.setItem('carts', parseInt(currentCartNumber) + 1)
    })
  }

  const addCart = async (cart) => {
    try {
      const cartResult = await CartService.getCartByProductId(cart._productId)

      if (cartResult.data.length > 0) {
        const existedCart = _.first(cartResult.data)

        const payload = {
          _productId: existedCart._productId,
          quantity: existedCart.quantity + state.itemQuantity
        }
        await CartService.updateCart(payload)
        console.log('se', cartResult.data)
      } else {
        const result = await CartService.addCart(cart)
        console.log('cart-added', result)
      }
    } catch (error) {
      console.log(error)
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
