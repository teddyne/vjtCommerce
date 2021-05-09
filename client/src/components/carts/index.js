import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'
import SoloButton from '../common/button'
import CartService from '../../services/cart.service.js'
import ShippingInfoModal from '../shipping'
import { Context } from '../../store/store'
import { useHistory } from 'react-router-dom'
import { COM } from '../../constants'

import './scss/_cart.scss'

const Cart = () => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const userId = COM ? "6077e89d4c14a3a650fe0530" : "606fd4b8d54f8b8dbc05939d"
  const [showShippingModal, setShowShippingModal] = useState(false)
  const [state, dispatch] = useContext(Context)
  const history = useHistory()

  useEffect(() => {
    const getCarts = async (userId) => {
      try {
        const result = await CartService.getCarts(userId)
        setCarts(result.data)
        const price = _.reduce(result.data, (s, { quantity, price }) => s + quantity * price, 0)
        setTotalPrice(price)
      } catch (err) {
        console.log(err)
      }
    }
    getCarts(userId)
  }, [userId, totalPrice])

  const handleOrder = () => {
    const hasShippingInfo = () => {
      console.log('cart userinfo', state.userInfo)
      return state.userInfo?.shippingInfo !== null
    }

    if (!hasShippingInfo()) {
      setShowShippingModal(true)
    } else {
      history.push('/payment')
    }
  }

  const handleChangeQuantity = (cart, type) => {
    updateQuantity(cart, type)
    setTotalPrice(totalPrice + (type === 'minus' ? -cart.price : cart.price))
  }

  const updateQuantity = async (cart, type) => {
    try {
      const payload = {
        _productId: cart._productId,
        quantity: cart.quantity + (type === 'minus' ? -1 : 1)
      }
      await CartService.updateCart(payload)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Row className='cart'>
      <Col lg={9}>
        <div className='cart-list'>
          {
            _.map(carts, (cart) => {
              return <CartItem key={cart._productId} cart={cart} onMinus={() => handleChangeQuantity(cart, 'minus')} onAdd={() => handleChangeQuantity(cart, 'add')} />
            })
          }
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
  )
}
export default Cart