import React from 'react'
import Toast from 'react-bootstrap/Toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
import SoloButton from '../button'

import './scss/customToast.scss'

const CustomToast = ({ isShow, onClose }) => {
    const history = useHistory()

    const openCart = () => {
        history.push('/cart')
    }

    return (
        <Toast className='custom-toast'
            onClose={onClose}
            show={isShow}
            delay={3000}
            autohide
            style={{
                position: 'fixed',
                top: 90,
                right: 340,
                zindex: 3000
            }}
        >
            <Toast.Header>
                <div className='check-circle'>
                    <FontAwesomeIcon icon={faCheckCircle} color={'green'} />
                </div>
                <span>Đã thêm một sản phẩm vào giỏ hàng!</span>
            </Toast.Header>
            <Toast.Body>
                <SoloButton btnStyle='sweet-red btn-order' onClick={openCart} text={'Xem Giỏ hàng và Thanh toán'} />
            </Toast.Body>
        </Toast>
    )
}
export default CustomToast