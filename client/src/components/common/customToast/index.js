import React from 'react'
import Toast from 'react-bootstrap/Toast'
import './scss/customToast.scss'

const CustomToast = ({ isShow }) => {
    return (
        <Toast className='custom-toast'
            show={isShow}
            style={{
                position: 'absolute',
                top: -65,
                right: -25,
                zindex: 3000
            }}
        >
            <Toast.Header>
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    )
}
export default CustomToast