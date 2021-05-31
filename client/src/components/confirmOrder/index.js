import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import thankYou from '../../assets/images/thank-you-order.png'
import SoloButton from '../common/button'
import Box from '../common/box'
import PayAccount from '../common/payAccount'
import { Context } from '../../store'
import OrderService from '../../services/order.service'
import { beginLoading, endLoading } from '../../services/loadingBar.service'

import './scss/_confirmOrder.scss'

const ConfirmOrder = () => {
    const history = useHistory()
    const [state, dispatch] = useContext(Context)
    const location = useLocation()
    const orderNumber = location.pathname.split('/')[2]
    const [orderInfo, setOrderInfo] = useState({
        orderNumber: orderNumber,
        paymentMethod: 'COD'
    })

    useEffect(() => {
        const getOrderByNumber = async () => {
            beginLoading(dispatch)
            try {
                if (orderNumber) {
                    const result = await OrderService.getOrderByNumber(orderNumber)
                    const order = result.data
                    setOrderInfo({
                        orderNumber: order.orderNumber,
                        paymentMethod: order.paymentMethod
                    })
                } else {
                    history.push('/not-found')
                }
            } catch (err) {
                history.push('/not-found')
            }
            endLoading(dispatch)
        }
        getOrderByNumber()
    }, [orderNumber])

    const handleBackHome = () => {
        history.push('/')
    }

    const renderDirection = () => {
        if (orderInfo.paymentMethod !== 'COD') {
            return <div>Vui lòng thanh toán và gửi mã đơn hàng của bạn tới thông tin tài khoản bên dưới.</div>
        } else {
            return <div>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ giao hàng trong vòng 7 ngày.</div>
        }
    }

    return (
        <div className='confirm-order'>
            <Box>
                <div className='thank'>
                    <img src={thankYou} alt="Thank you for your order" />
                    <div className='order-number'>
                    Mã đơn hàng: <span>{orderInfo.orderNumber}</span>
                    <br />
                    Phương thức thanh toán: <span>{orderInfo.paymentMethod}</span>
                    {renderDirection()}
                    </div>
                </div>
                {orderInfo.paymentMethod !== 'COD' && <PayAccount />}
                <SoloButton btnStyle='sweet-red btn-back-home' text={'Tiếp tục mua hàng'} onClick={handleBackHome} />
            </Box>
        </div>
    )
}
export default ConfirmOrder