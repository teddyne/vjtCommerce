import express from 'express'
import {
    multipleUpload,
    download
} from '../controllers/file.controller.js'
const router = express.Router()

router.post('/upload', multipleUpload)
router.get('/files/:name', download)

export default router