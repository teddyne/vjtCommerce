import React from 'react'
import SoloButton from '../button'
import Box from '../box'
import { useHistory } from 'react-router-dom'

import './_noItem.scss'

const NoItem = ({ img, imgTitle, text, isShowContinueButton }) => {
    const history = useHistory()

    const handleBackHome = () => {
        history.push('/')
    }

    return (
        <Box>
            <div className='no-item'>
                <img src={img} alt={imgTitle} />
                <div className='no-item-text'>{text}</div>
                {isShowContinueButton && <SoloButton btnStyle='sweet-red' text={'Tiếp tục mua hàng'} onClick={handleBackHome} />}
            </div>
        </Box>
    )
}

NoItem.defaultProps = {
    isShowContinueButton: true
}

export default NoItem