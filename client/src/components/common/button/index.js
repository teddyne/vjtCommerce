import React from 'react'
import Button from 'react-bootstrap/Button'

import './scss/_button.scss'

const SoloButton = ({ variant = '', btnStyle = '', text, onClick }) => {
    return (
        <Button variant={variant} className={btnStyle} onClick={onClick}>{text}</Button>
    )
}
export default SoloButton