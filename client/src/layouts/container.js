import React from 'react'
import DefaultLayout from './defaultLayout'
import Store from '../store/store'
import AdminLayout from './adminLayout'

const withContainer = (Component) => {
    const ContainerWrapper = (props) => {
        const userLs = localStorage.user
        const currentUser = userLs ? JSON.parse(userLs).user : null
        return <Component {...props} currentUser={currentUser} />
    }
    return ContainerWrapper
}

const withLayout = (component, isAdmin = false) => {
    return isAdmin ?
    (
        <AdminLayout>
            {component}
        </AdminLayout>
    )
    :
    (
        //<Store>
            <DefaultLayout>
                {component}
            </DefaultLayout>
        //</Store>
    )
}

export { withContainer, withLayout }