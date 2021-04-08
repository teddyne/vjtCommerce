import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import CartItem from './cartItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'
import SoloButton from '../../components/common/button'
import CartService from '../../services/cartService'

import './scss/_cart.scss'

const Cart = () => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect (() => {
    const getCarts = async () => {
      try {
        const result = await CartService.getCarts()
        setCarts(result.data)
        const price = _.reduce(result.data, (s, { quantity, price }) => s + quantity * price, 0)
        setTotalPrice(price)
      } catch (err) {
        console.log(err)
      }
    }
    getCarts()
  }, [])

  return (
    <Row className='cart'>
      <Col lg={9}>
        <div className='cart-list'>
          {
            _.map(carts, (cart) => {
              return <CartItem key={cart._productId} cart={cart} />
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
        <SoloButton btnStyle='solo btn-check-out' text={'Đặt hàng'} />
      </Col>
    </Row>
  )
}
export default Cart