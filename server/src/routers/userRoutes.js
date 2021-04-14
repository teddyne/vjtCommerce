import express from 'express'
import { getUsers, addUser, getUserById, updateShippingInfo } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', addUser)
router.put('/:id', updateShippingInfo)

export default router