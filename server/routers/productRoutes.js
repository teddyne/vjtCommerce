import express from 'express'
import { getProducts, getProductById, addProduct, updateProductImages } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', addProduct)
router.put('/:id/images', updateProductImages)

export default router