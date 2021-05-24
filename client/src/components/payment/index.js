import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SoloButton from '../../components/common/button'
import { formatCurrency } from '../../helpers/stringHelper'
import Box from '../common/box'
import PaymentItem from './paymentItem'
import { Context } from '../../store/store'
import { SET_LOADING, SET_CURRENT_USER } from '../../store/action'
import _ from 'lodash'
import Form from 'react-bootstrap/Form'
import NoItem from '../common/noItem'
import ShippingInfo from '../common/shipping/info'
import OrderService from '../../services/order.service'
import UserService from '../../services/user.service'
import { updateLocalStorage } from '../../helpers/commonHelper'

import './scss/_payment.scss'

const Payment = () => {
  const history = useHistory()
  const [state, dispatch] = useContext(Context)
  const currentUser = state.currentUser
  const carts = state.currentUser?.carts
  const tempPrice = _.reduce(carts, (s, { quantity, discountedPrice }) => s + quantity * discountedPrice, 0)

  const [paymentMethod, setPaymentMethod] = useState('COD')
  const [shippingFee, setShippingFee] = useState(19000)

  const handleOrder = async () => {
    dispatch({ type: SET_LOADING, payload: true })
    try {
      const order = await createOrder()
      console.log('order', order)
      const result = await UserService.deleteAllCarts(state.currentUser._id)
      updateLocalStorage(null, 'cart')
      dispatch({ type: SET_CURRENT_USER, payload: result.data })
      history.push('/confirm-order')
    } catch (error) {
      console.log(error)
    }
    dispatch({ type: SET_LOADING, payload: false })
  }

  const createOrder = async () => {
    const payload = {
      user: {
        _id: currentUser._id,
        name: currentUser.name,
        phone: currentUser.phone
      },
      products: currentUser.carts,
      paymentMethod: paymentMethod,
      shippingInfo: currentUser.shippingInfo,
      shippingFee: shippingFee,
      amount: tempPrice,
      totalAmount: tempPrice + shippingFee
    }
    const result = await OrderService.createOrder(payload)
    return result.data
  }

  const handleChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value)
    if (event.target.value === 'ATM' || event.target.value === 'MOMO') setShippingFee(0)
  }

  return _.isEmpty(state.currentUser?.carts) ? <NoItem /> : (
    <Row className="payment">
      <Col lg={9}>
        <div className="product-list">
          <span className="payment-step">1. Kiểm tra lại đơn hàng</span>
          <Box key='payment-box-1' className="payment-box">
            {
              _.map(state.currentUser?.carts, (cart) => {
                return <PaymentItem key={cart._productId} cart={cart} />
              })
            }
          </Box>
        </div>
        <div className="payment-method">
          <span className="payment-step">2. Chọn phương thức thanh toán</span>
          <Box key='payment-box-2'>
            <Form>
              <div className="mb-3">
                <Form.Check label="Thanh toán khi nhận hàng" name="payment-method" value='COD' type="radio" defaultChecked id={`inline-1`} onChange={handleChangePaymentMethod} />
                <div className='pay-by'>
                  <Form.Check label="Thanh toán bằng thẻ ATM" name="payment-method" value='ATM' type="radio" id={`inline-2`} onChange={handleChangePaymentMethod} />
                  <span className="discount">FreeShip</span>
                </div>
                <div className='pay-by'>
                  <Form.Check label="Momo" name="payment-method" value='MOMO' type="radio" id={`inline-3`} onChange={handleChangePaymentMethod} />
                  <span className="discount">FreeShip</span>
                </div>
              </div>
            </Form>
          </Box>
        </div>
        <div className="order">
          <SoloButton btnStyle='sweet-red btn-order' text={'Đặt hàng'} onClick={handleOrder} />
        </div>
      </Col>
      <Col lg={3}>
        <ShippingInfo shippingInfo={state.currentUser?.shippingInfo} />
        <div className="check-out">
          <div className="order-title b-b-1">Đơn hàng</div>
          <div className="row-price">
            <div className="title">Tạm tính:</div>
            <div className="price">{formatCurrency(tempPrice)}</div>
          </div>
          <div className="row-price b-b-1">
            <div className="title">Phí vận chuyển:</div>
            <div className="price">{formatCurrency(shippingFee)}</div>
          </div>
          <div className="row-price">
            <div className="title">Thành tiền:</div>
            <div className="price total-price">{formatCurrency(tempPrice + shippingFee)}</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default Payment