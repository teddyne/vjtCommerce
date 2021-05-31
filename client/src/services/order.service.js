import http from '../helpers/httpCommon'

const OrderService = {
    getOrders () {
        return http.get(`/orders`)
    },
    getOrdersByUserId (userId) {
        return http.get(`/orders?userId=${userId}`)
    },
    getOrderByNumber (orderNumber) {
        return http.get(`/orders/${orderNumber}`)
    },
    createOrder (order) {
        return http.post('/orders', order)
    }
}
export default OrderService