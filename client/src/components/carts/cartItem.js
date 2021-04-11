import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import QuantityInput from '../common/quantityInput2'
import { formatCurrency } from '../../helpers/stringHelper'

const CartItem = ({ cart, onMinus, onAdd }) => {
    const updateCartQuantity = () => {

    }

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
                <div className='item-price'>{formatCurrency(cart.price - ((cart.price * cart.discount) / 100))}</div>
                <div className="discount-price">
                    <span className="original-price">{formatCurrency(cart.price)}</span> | <span>{`-${cart.discount}%`}</span>
                </div>
            </Col>
            <Col lg={2}>
                <QuantityInput
                    quantity={cart.quantity}
                    isShowText={false}
                    onClickMinus={onMinus}
                    onClickAdd={onAdd}
                />
            </Col>
        </Row>
    )
}
export default CartItem