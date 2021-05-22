import React from 'react'
import noCarts from '../../../assets/images/no-carts.png'
import SoloButton from '../button'
import Box from '../box'
import { useHistory } from 'react-router-dom'

import './_noItem.scss'

const NoItem = () => {
    const history = useHistory()

    const handleBackHome = () => {
        history.push('/')
    }

    return (
        <Box>
            <div className='no-carts'>
                <img src={noCarts} alt={'No carts'} />
                <div className="no-carts-text">Không có sản phẩm nào trong giỏ hàng!</div>
                <SoloButton btnStyle='sweet-red' text={'Tiếp tục mua hàng'} onClick={handleBackHome} />
            </div>
        </Box>
    )
}

export default NoItem