import http from '../httpCommon'

const UserService = {
    getUserById (userId) {
        return http.get(`/users/${userId}`)
    },
    updateShippingInfo (userId, shippingInfo) {
        console.log('ahihu', shippingInfo)
        return http.put(`/users/${userId}`, shippingInfo)
    }
}
export default UserService