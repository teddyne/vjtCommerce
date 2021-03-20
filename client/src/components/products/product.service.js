import http from '../../httpCommon'

const ProductService = {
    getProducts () {
        return http.get('/products')
    },
    getWidgets () {
        return http.get('/widgets')
    },
    getSimilarProductsWidget (name) {
        return http.get(`/widgets?name=${name}`)
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