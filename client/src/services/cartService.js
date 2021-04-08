import http from '../httpCommon'

const CartService = {
    getCarts () {
        return http.get('/carts')
    },
    getCartByProductId (productId) {
        return http.get(`/carts?productId=${productId}`)
    },
    addCart (cart) {
        return http.post('/carts', cart)
    },
    updateCart (payload) {
        return http.put('/carts', payload)
    }
}
export default CartService