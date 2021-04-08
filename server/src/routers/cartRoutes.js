import express from 'express'
import { getCarts, addCart, updateCart } from '../controllers/cartController.js'

const router = express.Router()

router.get('/', getCarts)
router.post('/', addCart)
router.put('/', updateCart)

export default router