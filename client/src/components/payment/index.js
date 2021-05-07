import React, { useContext, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SoloButton from '../../components/common/button'
import { formatCurrency } from '../../helpers/stringHelper'
import Box from '../common/box'
import CartItem from '../../components/carts/cartItem'
import { Context } from '../../store/store'
import _ from 'lodash'
import Form from 'react-bootstrap/Form'

import './scss/_payment.scss'

const Payment = () => {
  const [, updateState] = useState();
  React.useCallback(() => updateState({}), [])
  const [state] = useContext(Context)

  console.log('payment carts', state.carts)
  
    return (
    <Row className="payment">
      <Col lg={9}>
          <div className="product-list">
            <Box>
              {
                _.map(state.carts, (cart) => {
                  return <CartItem key={cart._productId} cart={cart} />
                })
              }
            </Box>
          </div>
          <div className="payment-method">
            <span>Chọn phương thức thanh toán</span>
            <Box>
              <Form>
                  <div className="mb-3">
                    <Form.Check label="Thanh toán khi nhận hàng" name="payment-method" type="radio" id={`inline-1`} />
                    <Form.Check label="Thanh toán bằng thẻ ATM" name="payment-method" type="radio" id={`inline-2`} />
                    <Form.Check label="Thanh toán bằng thẻ tín dụng" name="payment-method" type="radio" id={`inline-3`} />
                    <Form.Check label="Momo" name="payment-method" type="radio" id={`inline-4`} />
                  </div>
              </Form>
            </Box>
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
          Tổng tiền: <span className='currency'>{formatCurrency(123)}</span>
        </div>
        <SoloButton btnStyle='sweet-red btn-check-out' text={'Đặt hàng'} />
      </Col>
    </Row>
    )
}
export default Payment