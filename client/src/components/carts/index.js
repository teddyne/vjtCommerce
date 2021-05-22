import React, { useContext, useEffect, useState } from 'react'
import { withContainer } from '../../layouts/container'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'
import SoloButton from '../common/button'
import UserService from '../../services/user.service.js'
import { Context } from '../../store/store'
import { useHistory } from 'react-router-dom'
import { SET_LOADING, SET_CURRENT_USER } from '../../store/action'
import NoItem from '../common/noItem'
import ShippingInfo from '../common/shipping/info'
import { updateLocalStorage } from '../../helpers/commonHelper'

import './scss/_cart.scss'

const Cart = (props) => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showShippingModal, setShowShippingModal] = useState(false)
  const [state, dispatch] = useContext(Context)
  const history = useHistory()
  const totalItem = props.currentUser?.carts.length

  useEffect(() => {
    const getCarts = async () => {
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const result = await UserService.getCarts(props.currentUser?._id)
        setCarts(result.data)
        const price = _.reduce(result.data, (s, { quantity, discountedPrice }) => s + quantity * discountedPrice, 0)
        setTotalPrice(price)
      } catch (err) {
        console.log(err)
      }
      dispatch({ type: SET_LOADING, payload: false })
    }
    getCarts()
  }, [totalItem])

  const handleOrder = () => {
    if (props.currentUser) {
      if (!props.currentUser.shippingInfo) {
        setShowShippingModal(true)
      } else {
        history.push('/payment')
      }
    } else {
      history.push('/sign-in?from=cart')
    }
  }

  const handleChangeQuantity = async (cart, type) => {
    const user = await updateQuantity(cart, type)
    dispatch({ type: SET_CURRENT_USER, payload: user })
    setCarts(user.carts)
    setTotalPrice(totalPrice + (type === 'minus' ? -cart.price : cart.price))
    updateLocalStorage(user.carts, 'cart')
  }

  const updateQuantity = async (cart, type) => {
    try {
      const payload = {
        quantity: cart.quantity + (type === 'minus' ? -1 : 1)
      }
      const result = await UserService.updateCartQuantity(props.currentUser?._id, cart._id, payload)
      return result.data
    } catch (err) {
      console.log(err)
    }
  }

  return _.isEmpty(carts) ? <NoItem /> :
    <Row className='cart'>
      <Col lg={9}>
        <div className='cart-list'>
          {_.map(carts, (cart) => {
            return <CartItem key={cart._productId} cart={cart} onMinus={() => handleChangeQuantity(cart, 'minus')} onAdd={() => handleChangeQuantity(cart, 'add')} />
          })}
        </div>
      </Col>
      <Col lg={3}>
        <ShippingInfo shippingInfo={state.currentUser?.shippingInfo} showShippingModal={showShippingModal} />
        <div className='check-out'>
          Tạm tính: <span className='currency'>{formatCurrency(totalPrice)}</span>
        </div>
        <SoloButton btnStyle='sweet-red btn-check-out' onClick={handleOrder} text={'Đặt hàng'} />
      </Col>
    </Row>
}
export default withContainer(Cart)