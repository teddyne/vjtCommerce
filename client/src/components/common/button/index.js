import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './scss/_button.scss'

const SoloButton = ({ variant = '', btnStyle = '', text, onClick, icon }) => {
    return icon ? 
        <Button variant={variant} className={btnStyle} onClick={onClick}>
            <FontAwesomeIcon className='icon' icon={icon.img} color={icon.color} size={icon.size} />{text}
        </Button>
    : <Button variant={variant} className={btnStyle} onClick={onClick}>{text}</Button>
}
export default SoloButton