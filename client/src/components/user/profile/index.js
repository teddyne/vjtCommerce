import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import user from '../../../assets/images/user/user.png'
import orderList from '../../../assets/images/user/order-list.png'
import heart from '../../../assets/images/user/heart.png'
import { withContainer } from '../../../layouts/container'
import { Context } from '../../../store'
import UserLayout from '../components/userLayout'

import './_profile.scss'

const Profile = ({ currentUser }) => {
    const history = useHistory()
    const [state, dispatch] = useContext(Context)
    const userId = currentUser?._id

    useEffect(() => {
      
    }, [])

    const handleClickSidebar = (path) => {
        history.push(`/${path}`)
    }
    
      const getSideBarItems = () => {
        return [
          {
            'name': 'Quản lý tài khoản',
            'icon': user,
            'iconLabel': 'Quản lý tài khoản',
            'onClick': () => handleClickSidebar('profile'),
            'isActive': true
          },
          {
            'name': 'Quản lý đơn hàng',
            'icon': orderList,
            'iconLabel': 'Quản lý đơn hàng',
            'onClick': () => handleClickSidebar('order-history')
          },
          {
            'name': 'Sản phẩm yêu thích',
            'icon': heart,
            'iconLabel': 'Sản phẩm yêu thích',
            'onClick': () => handleClickSidebar('love')
          }
        ]
    }

    return (
        <UserLayout sideBarItems={getSideBarItems()}>
            <h1>Profile</h1>
        </UserLayout>
    )
}

export default withContainer(Profile)