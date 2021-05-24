import http from '../httpCommon'

const OrderService = {
    getOrders () {
        return http.get(`/orders`)
    },
    getOrdersByUserId (userId) {
        return http.get(`/orders?userId=${userId}`)
    },
    createOrder (order) {
        return http.post('/orders', order)
    }
}
export default OrderService