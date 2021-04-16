import express from 'express'
import {
    getRegions
} from '../controllers/region.controller.js'

const router = express.Router()

router.get('/', getRegions)

export default router