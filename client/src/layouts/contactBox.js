import React from 'react'
import phone from '../assets/images/contacts/phone.png'
import messaenger from '../assets/images/contacts/messenger.png'
import zalo from '../assets/images/contacts/zalo.png'
import skype from '../assets/images/contacts/skype.png'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './scss/_contactBox.scss'

const ContactBox = () => {

    const renderTooltip = (props) => {
        return (<Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
        )
    }
    return (
        <div className='contact-box'>
            <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>
                <img src={messaenger} alt='' />
            </OverlayTrigger>

            <img src={zalo} alt='' />
            <img src={skype} alt='' />
            <img src={phone} alt='' />
        </div>
    )
}
export default ContactBox