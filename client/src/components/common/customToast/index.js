import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './scss/customToast.scss'

const CustomToast = ({ isShow, onClose }) => {
    return (
        <Toast className='custom-toast'
            //onClose={onClose}
            show={isShow}
            delay={3000}
            //autohide
            style={{
                position: 'absolute',
                top: -65,
                right: -60,
                zindex: 3000
            }}
        >
            <Toast.Header>
                <div className='review-check-circle'>
                    <FontAwesomeIcon icon={faCheckCircle} color={'green'} />
                </div>
                <span className='bougth-verified'>Đã thêm một em vào giỏ hàng!</span>
            </Toast.Header>
            <Toast.Body>
                <Button className="btn-buy-right-now">Xem Giỏ hàng và Thanh toán</Button>
            </Toast.Body>
        </Toast>
    )
}
export default CustomToast