import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import SoloButton from '../../button'
import Select from 'react-select'
import Emoji from '../../emoji'
import CartService from '../../../../services/cart.service'
import UserService from '../../../../services/user.service'
import { Context } from '../../../../store/store'
import { SET_CURRENT_USER } from '../../../../store/action'
import { updateLocalStorage } from '../../../../helpers/commonHelper'
import { useHistory, useLocation } from 'react-router-dom'

import './_shipping.scss'

const ShippingInfoModal = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [state, dispatch] = useContext(Context)
    const currentUser = state.currentUser
    const userId = currentUser?._id

    const [regions, setRegions] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const initShippingInfo = {
        name: currentUser?.name,
        phone: currentUser?.phone,
        address: null,
        ward: null,
        district: null,
        region: null
    }
    const [shippingInfo, setShippingInfo] = useState(initShippingInfo)

    useEffect(() => {
        const getRegions = async () => {
            try {
                const result = await CartService.getRegions()
                setRegions(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        getRegions()
    }, [])

    useEffect(() => {
        const getUserById = async (userId) => {
            try {
                const result = await UserService.getUserById(userId)
                const data = result.data.shippingInfo
                if (data) {
                    setShippingInfo(data)
                    getWardsOrDistricts('districts', data.region.value)
                    getWardsOrDistricts('wards', data.district.value)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getUserById(userId)
    }, [userId])

    const handleChangeRegions = async (event) => {
        getWardsOrDistricts('districts', event.value)
        const region = event
        setShippingInfo(prevState => ({
            ...prevState,
            region: region
        }))
    }

    const handleChangeDistricts = (event) => {
        getWardsOrDistricts('wards', event.value)
        const district = event
        setShippingInfo(prevState => ({
            ...prevState,
            district: district
        }))
    }

    const handleChangeWards = (event) => {
        const ward = event
        setShippingInfo(prevState => ({
            ...prevState,
            ward: ward
        }))
    }

    const handleChangeAddress = (event) => {
        const address = event.target.value
        setShippingInfo(prevState => ({
            ...prevState,
            address: address
        }))
    }

    const handleChangeName = (event) => {
        const name = event.target.value
        setShippingInfo(prevState => ({
            ...prevState,
            name: name
        }))
    }

    const handleChangePhone = (event) => {
        const phone = event.target.value
        setShippingInfo(prevState => ({
            ...prevState,
            phone: phone
        }))
    }

    const getWardsOrDistricts = async (type, code) => {
        try {
            const result = await CartService.getWardsOrDistricts(type, code)
            if (type === 'districts') setDistricts(result.data)
            if (type === 'wards') setWards(result.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdateShippingInfo = async () => {
        try {
            const result = await UserService.updateShippingInfo(userId, shippingInfo)
            if (result.data) {
                updateLocalStorage(result.data, 'user')
                dispatch({ type: SET_CURRENT_USER, payload: result.data })
            }
            props.onHide()

            if (location.pathname !== '/payment') {
                history.push('/payment')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Chỉ một chút thôi...<Emoji symbol="🙌" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className="modal-descr">Vui lòng nhập địa chỉ nhận hàng<Emoji symbol="📦" /> bạn nhé! <Emoji symbol="🥰" times={3} /></span>
                <Form className="shipping-info-form">
                    <Form.Group controlId="phone">
                        <Form.Label>Tên Người Nhận</Form.Label>
                        <Form.Control type="text" required placeholder="Tên Người Nhận" value={shippingInfo.name} onChange={handleChangeName} />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Số Điện Thoại</Form.Label>
                        <Form.Control type="text" required placeholder="Số Điện Thoại" value={shippingInfo.phone} onChange={handleChangePhone} />
                    </Form.Group>
                    <Form.Group controlId="district">
                        <Form.Label>Tỉnh/Thành Phố</Form.Label>
                        <Select placeholder="Chọn Tỉnh/Thành Phố" options={regions} onChange={handleChangeRegions} defaultValue={shippingInfo.region} />
                    </Form.Group>
                    <Form.Group controlId="district">
                        <Form.Label>Quận/Huyện</Form.Label>
                        <Select placeholder="Chọn Quận/Huyện" options={districts} onChange={handleChangeDistricts} defaultValue={shippingInfo.district} />
                    </Form.Group>
                    <Form.Group controlId="ward">
                        <Form.Label>Phường/Xã</Form.Label>
                        <Select placeholder="Chọn Phường/Xã" options={wards} defaultValue={shippingInfo.ward} onChange={handleChangeWards} />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Địa Chỉ</Form.Label>
                        <Form.Control type="text" required placeholder="Nhập Địa Chỉ. VD: 23 Cộng Hòa" value={shippingInfo.address} onChange={handleChangeAddress} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <SoloButton variant='secondary' text={'Hủy'} onClick={props.onHide} />
                <SoloButton btnStyle='sweet-red' text={'Lưu'} onClick={handleUpdateShippingInfo} />
            </Modal.Footer>
        </Modal>
    )
}
export default ShippingInfoModal