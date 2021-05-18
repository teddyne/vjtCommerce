import React, { useContext, useEffect, useState } from 'react'
import { withContainer } from '../../layouts/container'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'
import SoloButton from '../common/button'
import UserService from '../../services/user.service.js'
import ShippingInfoModal from '../shipping'
import { Context } from '../../store/store'
import { useHistory } from 'react-router-dom'
import noCarts from '../../assets/images/no-carts.png'
import Box from '../common/box'
import { SET_LOADING, SET_CURRENT_USER } from '../../store/action'

import './scss/_cart.scss'

const Cart = (props) => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [showShippingModal, setShowShippingModal] = useState(false)
  const [, dispatch] = useContext(Context)
  const history = useHistory()
  const totalItem = props.currentUser.carts.length

  useEffect(() => {
    const getCarts = async () => {
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const result = await UserService.getCarts(props.currentUser._id)
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
      const hasShippingInfo = () => {
        return props.currentUser.shippingInfo !== null
      }
      if (!hasShippingInfo()) {
        setShowShippingModal(true)
      } else {
        history.push('/payment')
      }
    } else {
      history.push('/sign-in?from=carts')
    }
  }

  const handleChangeQuantity = async (cart, type) => {
    const user = await updateQuantity(cart, type)
    dispatch({ type: SET_CURRENT_USER, payload: user })
    setCarts(user.carts)
    setTotalPrice(totalPrice + (type === 'minus' ? -cart.price : cart.price))
    updateUserLocalStorage(user.carts)
  }

  const updateQuantity = async (cart, type) => {
    try {
      const payload = {
        quantity: cart.quantity + (type === 'minus' ? -1 : 1)
      }
      const result = await UserService.updateCartQuantity(props.currentUser._id, cart._id, payload)
      return result.data
    } catch(err) {
      console.log(err)
    }
  }

  const handleBackHome = () => {
    history.push('/')
  }

  const updateUserLocalStorage = (carts) => {
    const data = JSON.parse(localStorage.getItem('user'))
    if (data && data.user) {
      data.user.carts = carts
      localStorage.setItem('user', JSON.stringify(data))
    }
  }

  return _.isEmpty(carts) ?
  <Box>
    <div className='no-carts'>
      <img src={noCarts} alt={'No carts'} />
      <div className="no-carts-text">Không có sản phẩm nào trong giỏ hàng!</div>
       <SoloButton btnStyle='sweet-red' text={'Tiếp tục mua hàng'} onClick={handleBackHome} />
    </div>
  </Box> 
  :
    <Row className='cart'>
      <Col lg={9}>
        <div className='cart-list'>
          {_.map(carts, (cart) => {
            return <CartItem key={cart._productId} cart={cart} onMinus={() => handleChangeQuantity(cart, 'minus')} onAdd={() => handleChangeQuantity(cart, 'add')} />
          })}
        </div>
      </Col>
      <Col lg={3}>
        <div className='deliver-info'>
          <div className='address-box'>
            <span className='address-title'>Địa chỉ nhận hàng</span>
            <span><a href='#'>Thay đổi</a></span>
          </div>
          <div className='customer-info'>
            <span>Nguyễn Hoàng Vũ</span>
            <span>0367242358</span>
          </div>
          <div className='address-info'>40A đường Lam Sơn, Phường 02, Quận Tân Bình, Hồ Chí Minh</div>
        </div>
        <div className='check-out'>
          Tổng tiền: <span className='currency'>{formatCurrency(totalPrice)}</span>
        </div>
        <SoloButton btnStyle='sweet-red btn-check-out' onClick={handleOrder} text={'Đặt hàng'} />
        <ShippingInfoModal
          show={showShippingModal}
          onHide={() => setShowShippingModal(false)} />
      </Col>
    </Row>
}
export default withContainer(Cart)