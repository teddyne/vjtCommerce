import http from '../../httpCommon'

const ProductService = {
    getProducts () {
        return http.get('/products')
    },
    getProductById (id) {
        return http.get(`/products/${id}`)
    },
    getSimilarProducts (currentProductId, category, top) {
        const url = `?currentProductId=${currentProductId}&category=${category}&top=${top}`
        return http.get(`/products${url}`)
    }
}
export default ProductService