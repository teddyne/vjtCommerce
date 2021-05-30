import React from 'react'
import ShippingEdit from '../edit'

import './_shippingInfo.scss'

const ShippingInfo = ({ shippingInfo }) => {
    const getAddress = () => {
        return `${shippingInfo?.address}, ${shippingInfo?.ward.label}, ${shippingInfo?.district.label}, ${shippingInfo?.region.label}`
    }
    return shippingInfo ? (
        <div className='shipping-info'>
          <div className='address-box'>
            <span className='address-title'>Địa chỉ nhận hàng</span>
            <ShippingEdit />
          </div>
          <div className='customer-info'>
            <span>{shippingInfo?.name}</span>
            <span>{shippingInfo?.phone}</span>
          </div>
          <div className='address-info'>{getAddress()}</div>
        </div>
    ) : null
}

export default ShippingInfo