import React, { useContext } from 'react'
import DefaultLayout from './defaultLayout'
import { Context } from '../store'
import AdminLayout from './adminLayout'

const withContainer = (Component) => {
    const ContainerWrapper = (props) => {
        const [state,] = useContext(Context)
        //const userLs = localStorage.getItem('user')
        //const currentUser = userLs ? JSON.parse(userLs).user : null
        //console.log('withContainer - user', state.currentUser)
        //console.log('withContainer - userLs', userLs)
        console.log('withContainer', state.currentUser)
        return <Component {...props} currentUser={state.currentUser} />
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