import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import vietcombank from '../../../assets/images/pay-accounts/vcb.png'
import techcombank from '../../../assets/images/pay-accounts/tcb.png'
import momo from '../../../assets/images/pay-accounts/momo.png'

import './_payAccount.scss'

const PayAccount = () => {
    return (
        <div className='pay-account'>
            <Row className='logo'>
                <Col>
                    <div>
                        <img src={vietcombank} alt='Vietcombank' />
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={techcombank} alt='Techcombank' />
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={momo} className='momo-logo' alt='MOMO' />
                    </div>
                </Col>
            </Row>
            <Row className='info'>
                <Col>
                    <div>
                        STK: 01001331010103203
                    </div>
                    <div>
                        Chủ tài khoản: Nguyễn Hoàng Vũ
                    </div>
                </Col>
                <Col>
                    <div>
                        STK: 01001331010103203
                    </div>
                    <div>
                        Chủ tài khoản: Nguyễn Hoàng Vũ
                    </div>
                </Col>
                <Col>
                    <div>
                        SĐT: 0314516261212
                    </div>
                    <div>
                        Chủ tài khoản: Nguyễn Hoàng Vũ
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default PayAccount