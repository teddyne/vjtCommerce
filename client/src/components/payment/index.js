import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SoloButton from '../../components/common/button'
import { formatCurrency } from '../../helpers/stringHelper'
import Box from '../common/box'
import PaymentItem from './paymentItem'
import { Context } from '../../store/store'
import _ from 'lodash'
import Form from 'react-bootstrap/Form'
import NoItem from '../common/noItem'
import ShippingInfo from '../common/shipping/info'

import './scss/_payment.scss'

const Payment = () => {
  const history = useHistory()
  const [state] = useContext(Context)
  const carts = state.currentUser?.carts
  const tempPrice = _.reduce(carts, (s, { quantity, discountedPrice }) => s + quantity * discountedPrice, 0)

  const handleOrder = () => {
    history.push('/thank-you')
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
                <Form.Check label="Thanh toán khi nhận hàng" name="payment-method" type="radio" defaultChecked id={`inline-1`} />
                <div className='pay-by'>
                  <Form.Check label="Thanh toán bằng thẻ ATM" name="payment-method" type="radio" id={`inline-2`} />
                  <span className="discount">Freeship</span>
                </div>
                <div className='pay-by'>
                  <Form.Check label="Momo" name="payment-method" type="radio" id={`inline-3`} />
                  <span className="discount">-{formatCurrency(10000)}</span>
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
            <div className="price">{formatCurrency(15000)}</div>
          </div>
          <div className="row-price">
            <div className="title">Thành tiền:</div>
            <div className="price total-price">{formatCurrency(tempPrice + 15000)}</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default Payment