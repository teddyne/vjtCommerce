import React from 'react'
import DefaultLayout from './defaultLayout'
import Store from '../store/store'
import AdminLayout from './adminLayout'

const withContainer = (Component) => {
class ContainerWrapper extends React.PureComponent {
        render() {
            return (
                <Component />
            )
        }
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