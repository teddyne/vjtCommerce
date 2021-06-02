import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import user from '../../../assets/images/user/user.png'
import orderList from '../../../assets/images/user/order-list.png'
import heart from '../../../assets/images/user/heart.png'
import { withContainer } from '../../../layouts/container'
import OrderService from '../../../services/order.service'
import _ from 'lodash'
import { formatTime } from '../../../helpers/dateTimeHelper'
import NoItem from '../../common/noItem'
import noOrders from '../../../assets/images/no-carts.png'
import { Context } from '../../../store'
import { beginLoading, endLoading } from '../../../services/loadingBar.service'
import UserLayout from '../../common/userLayout'
import { formatCurrency } from '../../../helpers/stringHelper'

import './_orderHistory.scss'

const OrderHistory = ({ currentUser }) => {
    const history = useHistory()
    const [state, dispatch] = useContext(Context)
    const [orders, setOrders] = useState([])
    const userId = currentUser?._id

    useEffect(() => {
      const getOrders = async (userId) => {
        beginLoading(dispatch)
        try {
          const result = await OrderService.getOrdersByUserId(userId)
          setOrders(result.data)
        } catch (error) {
          
        }
        endLoading(dispatch)
      }
      getOrders(userId)
    }, [userId])

    const handleClickSidebar = (path) => {
        history.push(`/${path}`)
    }
    
      const getSideBarItems = () => {
        return [
          {
            'name': 'Quản lý tài khoản',
            'icon': user,
            'iconLabel': 'Quản lý tài khoản',
            'onClick': () => handleClickSidebar('profile')
          },
          {
            'name': 'Quản lý đơn hàng',
            'icon': orderList,
            'iconLabel': 'Quản lý đơn hàng',
            'onClick': () => handleClickSidebar('order-history'),
            'isActive': true
          },
          {
            'name': 'Sản phẩm yêu thích',
            'icon': heart,
            'iconLabel': 'Sản phẩm yêu thích',
            'onClick': () => handleClickSidebar('love')
          }
        ]
    }

    const renderOrderHistoryTable = () => {
      return _.isEmpty(orders) 
      ? <NoItem img={noOrders} imgTitle='Không tìm thấy đơn hàng' text={'Bạn chưa có đơn hàng nào!'} isShowContinueButton={false} />
      : (
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
                {
                  _.map(orders, (order) => {
                    return (
                      <tr>
                        <td>{order.orderNumber.toUpperCase()}</td>
                        <td>{formatTime(order.createdAt)}</td>
                        <td>
                          {
                            _.map(order.products, (product) => {
                              return (
                                <div>{product.name}</div>
                              )
                            })
                          }
                        </td>
                        <td>{formatCurrency(order.totalAmount)}</td>
                        <td>Đã giao hàng</td>
                      </tr>
                    )
                  })
                }
                </tbody>
          </Table> 
        )
    }

    return (
      <UserLayout sideBarItems={getSideBarItems()}>
        {renderOrderHistoryTable()}
      </UserLayout>
    )
}

export default withContainer(OrderHistory)