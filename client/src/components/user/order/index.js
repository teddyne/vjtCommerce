import React from 'react'
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '../../common/box'
import SideBar from '../../../layouts/sideBar'
import user from '../../../assets/images/user/user.png'
import orderList from '../../../assets/images/user/order-list.png'
import heart from '../../../assets/images/user/heart.png'
import { CategoryConstant } from '../../../constants'

import './_order.scss'

const Order = () => {
    const history = useHistory()
    const handleClickMenu = (path) => {
        history.push(`/${path}.html`)
    }
    
      const getSideBarItems = () => {
        return [
          {
            'name': 'Quản lý tài khoản',
            'icon': user,
            'iconLabel': 'Quản lý tài khoản',
            'onClick': () => handleClickMenu(CategoryConstant.Climbing)
          },
          {
            'name': 'Quản lý đơn hàng',
            'icon': orderList,
            'iconLabel': 'Quản lý đơn hàng',
            'onClick': () => handleClickMenu(CategoryConstant.Camping)
          },
          {
            'name': 'Sản phẩm yêu thích',
            'icon': heart,
            'iconLabel': 'Sản phẩm yêu thích',
            'onClick': () => handleClickMenu(CategoryConstant.Traveling)
          }
        ]
    }

    return (
        <div className='order'>
            <Row>
                <Col className='order-side-bar' lg={3}>
                <SideBar items={getSideBarItems()} />
                </Col>
                <Col className='box-content' lg={9}>
                <Box>
                    <Table striped bordered>
                    <thead>
                        <tr>
                        <th>Mã đơn hàng</th>
                        <th>Ngày mua</th>
                        <th>Sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                        <td>KFDGKJ353</td>
                        <td>31/05/2021</td>
                        <td>Mũ bảo hiểm Royal never givup 1</td>
                        <td>423.000d</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>KFDGKJ353</td>
                        <td>31/05/2021</td>
                        <td>Mũ bảo hiểm Royal never givup 1</td>
                        <td>423.000d</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>KFDGKJ353</td>
                        <td>31/05/2021</td>
                        <td>Mũ bảo hiểm Royal never givup 1</td>
                        <td>423.000d</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>KFDGKJ353</td>
                        <td>31/05/2021</td>
                        <td>Mũ bảo hiểm Royal never givup 1</td>
                        <td>423.000d</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        <tr>
                        <td>KFDGKJ353</td>
                        <td>31/05/2021</td>
                        <td>Mũ bảo hiểm Royal never givup 1</td>
                        <td>423.000d</td>
                        <td>Giao hàng thành công</td>
                        </tr>
                        </tbody>
                </Table>    
            </Box>
                </Col>
            </Row>
        </div>
    )
}

export default Order