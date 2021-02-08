import React from 'react'
import phone from '../assets/images/contacts/phone.png'
import messaenger from '../assets/images/contacts/messenger.png'
import zalo from '../assets/images/contacts/zalo.png'
import skype from '../assets/images/contacts/skype.png'
import PowerTooltip from '../components/common/powerTooltip'
import { ContactBoxConstant } from '../constants/index'

import './scss/_contactBox.scss'

const ContactBox = () => {
    const delay = {
        show: 150,
        hide: 150
    }
    return (
        <div className='contact-box'>
            <PowerTooltip placement="left" delay={delay} title={ContactBoxConstant.ViaMessenger}>
                <img src={messaenger} alt={ContactBoxConstant.ViaMessenger} />
            </PowerTooltip>
            <PowerTooltip placement="left" delay={delay} title={ContactBoxConstant.ViaZalo}>
                <img src={zalo} alt={ContactBoxConstant.ViaZalo} />
            </PowerTooltip>
            <PowerTooltip placement="left" delay={delay} title={ContactBoxConstant.ViaSkype}>
                <img src={skype} alt={ContactBoxConstant.ViaSkype} />
            </PowerTooltip>
            <PowerTooltip placement="left" delay={delay} title={ContactBoxConstant.CallUs}>
                <img src={phone} alt={ContactBoxConstant.CallUs} />
            </PowerTooltip>
        </div>
    )
}
export default ContactBox