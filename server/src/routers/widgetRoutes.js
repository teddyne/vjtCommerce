import express from 'express'
import { getWidgets, addWidget } from '../controllers/widgetController.js'

const router = express.Router()

router.get('/', getWidgets)
router.post('/', addWidget)

export default router