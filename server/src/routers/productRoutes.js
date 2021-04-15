import express from 'express'
import {
    getProducts,
    getProductById,
    addProduct,
    updateProductImages
} from '../controllers/productController.js'
import { verifyToken } from '../auth/verifyJwtToken.js'

const router = express.Router()

router.get('/', [verifyToken], getProducts)
router.get('/:id', getProductById)
router.post('/', addProduct)
router.put('/:id/images', updateProductImages)

export default router