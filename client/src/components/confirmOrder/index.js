import React from 'react'
import { useHistory } from 'react-router-dom'
import thankYou from '../../assets/images/thank-you-order.png'
import SoloButton from '../common/button'
import Box from '../common/box'
import PayAccount from '../common/payAccount'

import './scss/_confirmOrder.scss'

const ConfirmOrder = () => {
    const history = useHistory()

    const handleBackHome = () => {
        history.push('/')
    }

    return (
        <div className="thank-you">
            <Box>
                <img src={thankYou} alt="Thank you for your order" />
                <div className="thank-text">Chúng tôi đã tiếp nhận đơn hàng và sẽ giao hàng trong thời gian sớm nhất. Xin chân thành cảm ơn Quý Khách!</div>
                <PayAccount />
                <SoloButton btnStyle='sweet-red btn-back-home' text={'Tiếp tục mua hàng'} onClick={handleBackHome} />
            </Box>
        </div>
    )
}
export default ConfirmOrder