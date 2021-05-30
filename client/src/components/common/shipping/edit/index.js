import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ShippingInfoModal from '../modal'

import './_shippingEdit.scss'

const ShippingEdit = () => {
    const [showShippingModal, setShowShippingModal] = useState(false)

    const handleClickChange = () => {
        setShowShippingModal(true)
    }

    return (
        <>
            <span className='shipping-edit' onClick={handleClickChange}>
                <FontAwesomeIcon icon={faEdit} size='1x' color='black' title='Thay đổi địa chỉ' />
            </span>
            <ShippingInfoModal
                show={ showShippingModal}
                onHide={() => setShowShippingModal(false)} />
        </>
    )
}

export default ShippingEdit