import express from 'express'
import { getProducts, getProductById, getSimilarProducts, addProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id(\d+)', getProductById)
//router.get('/hihi', getSimilarProducts)
router.post('/', addProduct)

export default router