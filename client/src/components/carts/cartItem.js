import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import QuantityInput from '../common/quantityInput'
import { formatCurrency } from '../../helpers/stringHelper'

const CartItem = ({ cart }) => {
    return (
        <Row className='cart-item'>
            <Col lg={2}>
                <img src={cart.thumbnail.thumbnailUrl} alt={cart.name} />
            </Col>
            <Col lg={6}>
                <div className='product-name'>{cart.name}</div>
                <div className='cart-control'>
                    <span><a href='#'>Xóa</a></span>
                    <span><a href='#'>Để lại mua sau</a></span>
                </div>
            </Col>
            <Col lg={2}>
                <div className='item-price'>{formatCurrency(cart.price)}</div>
            </Col>
            <Col lg={2}>
                <QuantityInput isShowText={false} />
            </Col>
      </Row>
    )
}
export default CartItem