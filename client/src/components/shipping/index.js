import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import SoloButton from '../common/button'
import _ from 'lodash'
import Select from 'react-select'
import Emoji from '../common/emoji'
import RegionData from '../../assets/json/region/region.json'
import DistrictData from '../../assets/json/region/district.json'

import './_shipping.scss'

const ShippingInfoModal = (props) => {
    const [regions, setRegions] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])


    useEffect(() => {
        const getRegions = () => {
            const originalRegions = Object.values(RegionData)
            const result = _.map(originalRegions, (item) => {
                return {
                    value: item.code,
                    label: item.name_with_type
                }
            })
            console.log('regions', result)
            setRegions(result)
        }
        getRegions()
    }, [])

    const mapData = (data) => {
        return _.map(data, (item) => {
            return {
                value: item.code,
                label: item.name_with_type
            }
        })
    }

    const handleChange = (event) => {
        console.log(event)
        getDistricts(event.value)
    }
    const getData1 =()=>{
        fetch('../../assets/json/region/wards/001.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
          });
      }

    const getDistricts = async (regionCode) => {
        const districts = mapData(_.filter(Object.values(DistrictData), x => x.parent_code === regionCode))
        console.log('dfdfdf', districts)
        getData1()
    }

    const getRegionData = (type, code = '') => {
        switch(type) {
            case 'region': return setRegions(mapData(Object.values(RegionData)))
            case 'district': return setDistricts(_.filter(Object.values(DistrictData), x => x.parent_code === code))
            case 'ward': return
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
                <Form.Label>Số Điện Thoại</Form.Label>
                <Form.Control type="text" required placeholder="Số Điện Thoại" />
            </Form.Group>
            <Form.Group controlId="district">
                <Form.Label>Tỉnh/Thành Phố</Form.Label>
                <Select placeholder="Chọn Tỉnh/Thành Phố" options={regions} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="district">
                <Form.Label>Quận/Huyện</Form.Label>
                <Form.Control name='district' as="select">
                  <option>Quận/Huyện</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ward">
                <Form.Label>Phường/Xã</Form.Label>
                <Form.Control name='ward' as="select">
                  <option>Phường/Xã</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
                <Form.Label>Địa Chỉ</Form.Label>
                <Form.Control type="text" required placeholder="23 Đường Trường Sơn" />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <SoloButton btnStyle='solo' text={'OK'} />
        </Modal.Footer>
        </Modal>
    )
}
export default ShippingInfoModal