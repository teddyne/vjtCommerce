import http from '../../httpCommon'

const ProductService = {
    getProducts () {
        return http.get('/products')
    },
    getProductById (id) {
        return http.get(`/products/${id}`)
    }
}
export default ProductService