import http from '../httpCommon'

const UserService = {
    getUserById (userId) {
        return http.get(`/users/${userId}`)
    },
    updateShippingInfo (userId, shippingInfo) {
        return http.put(`/users/${userId}/shipping-info`, shippingInfo)
    },
    getCarts (userId) {
        return http.get(`/users/${userId}/carts`)
    },
    updateCarts (userId, cart) {
        return http.put(`/users/${userId}/carts`, cart)
    },
    updateCartQuantity (userId, cartId, payload) {
        return http.put(`/users/${userId}/carts/${cartId}`, payload)
    },
    deleteCart (userId, cartId) {
        return http.delete(`/users/${userId}/carts/${cartId}`)
    },
    deleteAllCarts (userId) {
        return http.delete(`/users/${userId}/carts`)
    }
}
export default UserService