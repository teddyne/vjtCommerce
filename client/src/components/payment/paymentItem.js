import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { formatCurrency } from '../../helpers/stringHelper'

import './scss/_payment.scss'

const PaymentItem = ({ cart }) => {
    return (
        <Row className='payment-item'>
            <Col lg={2}>
                <img src={cart.thumbnail.thumbnailUrl} alt={cart.name} />
            </Col>
            <Col lg={8}>
                <div className='product-name'>{cart.name}</div>
                <div className='item-quantity'>
                    <span>SL: x{cart.quantity}</span>
                </div>
            </Col>
            <Col lg={2}>
                <div className='item-price'>{formatCurrency(cart.discountedPrice * cart.quantity)}</div>
            </Col>
        </Row>
    )
}
export default PaymentItem