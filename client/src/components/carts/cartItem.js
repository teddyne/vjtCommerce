import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import QuantityInput from '../common/quantityInput'

const CartItem = ({ cart }) => {
    return (
        <Row className='cart-item'>
            <Col lg={2}>
                <img src={cart.images[0].thumbnailUrl} alt={cart.name} />
            </Col>
            <Col lg={5}>
                <p>{cart.name}</p>
            </Col>
            <Col lg={2}>
                <p>{cart.price}</p>
            </Col>
            <Col lg={3}>
                <QuantityInput />
            </Col>
      </Row>
    )
}
export default CartItem