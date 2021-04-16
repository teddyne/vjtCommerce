import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'
import SoloButton from '../../components/common/button'
import CartService from '../../services/cart.service.js'
import ShippingInfoModal from '../../components/shipping'

import './scss/_cart.scss'

const Cart = () => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const homeUserId = "60726befdaa6d52624a91435"
  const companyUserId = "606fd4b8d54f8b8dbc05939d"
  const [showShippingModal, setShowShippingModal] = useState(false)

  useEffect(() => {
    const getCarts = async (homeUserId) => {
      try {
        const result = await CartService.getCarts(homeUserId)
        setCarts(result.data)
        const price = _.reduce(result.data, (s, { quantity, price }) => s + quantity * price, 0)
        setTotalPrice(price)
      } catch (err) {
        console.log(err)
      }
    }
    getCarts(homeUserId)
  }, [homeUserId, totalPrice])

  const handleOrder = () => {
    const hasShippingInfo = () => {
      return false
    }

    if (!hasShippingInfo()) {
      setShowShippingModal(true)
    } else {
      console.log('order')
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
        <SoloButton btnStyle='solo btn-check-out' onClick={handleOrder} text={'Đặt hàng'} />
        <ShippingInfoModal
          show={showShippingModal}
          onHide={() => setShowShippingModal(false)} />
      </Col>
    </Row>
  )
}
export default Cart