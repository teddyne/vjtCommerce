import http from '../helpers/httpCommon'

const CartService = {
    getCarts (userId) {
        return http.get(`/carts?userId=${userId}`)
    },
    getCartByProductId (productId) {
        return http.get(`/carts?productId=${productId}`)
    },
    addCart (cart) {
        return http.post('/carts', cart)
    },
    updateCart (payload) {
        return http.put('/carts', payload)
    },
    getRegions () {
        return http.get('/regions')
    },
    getWardsOrDistricts (type, code) {
        return http.get(`/regions?type=${type}&code=${code}`)
    }
}
export default CartService