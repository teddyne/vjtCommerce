import express from 'express'
import {
    signIn,
    signUp
} from '../controllers/auth.controller.js'
import {
    getProducts,
    getProductById,
    addProduct,
    updateProductImages
} from '../controllers/product.controller.js'
import {
    getCategories,
    addCategory
} from '../controllers/category.controller.js'
import {
    getWidgets,
    addWidget
} from '../controllers/widget.controller.js'
import {
    multipleUpload,
    download
} from '../controllers/file.controller.js'
import { 
    getCarts,
     addCart,
     updateCart
} from '../controllers/cart.controller.js'
import {
    getUsers,
    addUser,
    getUserById,
    updateShippingInfo
} from '../controllers/user.controller.js'
import {
    getRegions
} from '../controllers/region.controller.js'
import { verifyToken } from '../auth/verifyJwtToken.js'

const Routes = (app) => {

    const router = express.Router()

    /* Auth API */
    const authApi = '/api/auth'
    router.post(`${authApi}/signin`, signIn)
    router.post(`${authApi}/signup`, signUp)

    /* Product API */
    const productApi = '/api/products'
    //router.get(productApi, [verifyToken], getProducts)
    router.get(productApi, getProducts)
    router.get(`${productApi}/:id`, getProductById)
    router.post(productApi, addProduct)
    router.put(`${productApi}/:id/images`, updateProductImages)

    /* Category API */
    const categoryApi = '/api/categories'
    router.get(categoryApi, getCategories)
    router.post(categoryApi, addCategory)

    /* Widget API */
    const widgetApi = '/api/widgets'
    router.get(widgetApi, getWidgets)
    router.post(widgetApi, addWidget)

    /* File API */
    router.post('api/upload', multipleUpload)
    router.get('api/files/:name', download)

    /* Cart API */
    const cartApi = '/api/carts'
    router.get(cartApi, getCarts)
    router.post(cartApi, addCart)
    router.put(cartApi, updateCart)

    /* User API */
    const userApi = '/api/carts'
    router.get(userApi, getUsers)
    router.get(`${userApi}/:id`, getUserById)
    router.post(userApi, addUser)
    router.put(`${userApi}/:id`, updateShippingInfo)

    /* Region API */
    router.get('/api/regions', getRegions)

    app.use(router)
}

export default Routes