import React, { useContext, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SoloButton from '../../components/common/button'
import { formatCurrency } from '../../helpers/stringHelper'
import Box from '../common/box'
import PaymentItem from './paymentItem'
import { Context } from '../../store/store'
import _ from 'lodash'
import Form from 'react-bootstrap/Form'

import './scss/_payment.scss'

const Payment = () => {
  // const [, updateState] = useState();
  // React.useCallback(() => updateState({}), [])
  const [state] = useContext(Context)

  console.log('payment carts', state)
  const carts = [
    {
      "_productId": 1,
      "name": "Mũ bão hiểm AGV m1",
      "thumbnail": {
        "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
      },
      "quantity": 2,
      "price": "798000"
    },
    {
      "_productId": 2,
      "name": "Mũ bão hiểm AGV m1",
      "thumbnail": {
        "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
      },
      "quantity": 1,
      "price": "798000"
    },
    {
      "_productId": 3,
      "name": "Mũ bão hiểm AGV m1",
      "thumbnail": {
        "thumbnailUrl": "https://salt.tikicdn.com/cache/280x280/ts/product/e8/b9/3d/12b0ba8a1d6129e1a8497a2653e1e8fb.jpg",
      },
      "quantity": 3,
      "price": "798000"
    }
  ]

  return (
    <Row className="payment">
      <Col lg={9}>
        <div className="product-list">
          <span className="payment-step">1. Kiểm tra lại đơn hàng</span>
          <Box className="payment-box">
            {
              _.map(carts, (cart) => {
                return <PaymentItem key={cart._productId} cart={cart} />
              })
            }
          </Box>
        </div>
        <div className="payment-method">
          <span className="payment-step">2. Chọn phương thức thanh toán</span>
          <Box className="payment-box">
            <Form>
              <div className="mb-3">
                <Form.Check label="Thanh toán khi nhận hàng" name="payment-method" type="radio" defaultChecked id={`inline-1`} />
                <Form.Check label="Thanh toán bằng thẻ ATM" name="payment-method" type="radio" id={`inline-2`} />
                <Form.Check label="Thanh toán bằng thẻ tín dụng" name="payment-method" type="radio" id={`inline-3`} />
                <Form.Check label="Momo" name="payment-method" type="radio" id={`inline-4`} />
              </div>
            </Form>
          </Box>
        </div>
        <div className="order">
          <SoloButton btnStyle='sweet-red btn-order' text={'Đặt hàng'} />
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
        <div className="check-out">
          <div className="order-title b-b-1">Đơn hàng</div>
          <div className="row-price">
            <div className="title">Tạm tính:</div>
            <div className="price">{formatCurrency(123)}</div>
          </div>
          <div className="row-price b-b-1">
            <div className="title">Phí vận chuyển:</div>
            <div className="price">{formatCurrency(123)}</div>
          </div>
          <div className="row-price">
            <div className="title">Thành tiền:</div>
            <div className="price total-price">{formatCurrency(10000000)}</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default Payment