import http from '../httpCommon'

const UserService = {
    getUserById (userId) {
        return http.get(`/users/${userId}`)
    },
    updateShippingInfo (userId, shippingInfo) {
        return http.put(`/users/${userId}/shipping-info`, shippingInfo)
    },
    updateCarts (userId, cart) {
        return http.put(`/users/${userId}/carts`, cart)
    }
}
export default UserService