import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import QuantityInput from '../../common/quantityInput'
import { formatCurrency } from '../../../helpers/stringHelper'
import UserService from '../../../services/user.service'
import { withContainer } from '../../../layouts/container'
import { Context } from '../../../store'
import { SET_CURRENT_USER } from '../../../store/action'
import { beginLoading, endLoading } from '../../../services/loadingBar.service'

const CartItem = ({ cart, onMinus, onAdd, currentUser }) => {
    const [,dispatch] = useContext(Context)

    const handleDeleteCart = async () => {
        beginLoading(dispatch)
        try {
            const result = await UserService.deleteCart(currentUser._id, cart._id)
            dispatch({ type: SET_CURRENT_USER, payload: result.data })
            updateUserLocalStorage(result.data.carts)
        } catch (ex) {
            console.log(ex)
        }
        endLoading(dispatch)
    }

    const updateUserLocalStorage = (carts) => {
        const data = JSON.parse(localStorage.getItem('user'))
        if (data && data.user) {
          data.user.carts = carts
          localStorage.setItem('user', JSON.stringify(data))
        }
      }

    return (
        <Row className='cart-item'>
            <Col lg={2}>
                <img src={cart.thumbnail.thumbnailUrl} alt={cart.name} />
            </Col>
            <Col lg={5}>
                <div className='product-name'>{cart.name}</div>
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
            <Col lg={1}>
            <div className='cart-control' onClick={handleDeleteCart}>
                    <FontAwesomeIcon className='search-icon' icon={faTrashAlt} color={'red'} />
                </div>
            </Col>
        </Row>
    )
}
export default withContainer(CartItem)