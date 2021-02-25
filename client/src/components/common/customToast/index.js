import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './scss/customToast.scss'

const CustomToast = ({ isShow, onClose }) => {
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
                <span>Đã thêm một em vào giỏ hàng!</span>
            </Toast.Header>
            <Toast.Body>
                <Button variant="info">Xem Giỏ hàng và Thanh toán</Button>
            </Toast.Body>
        </Toast>
    )
}
export default CustomToast