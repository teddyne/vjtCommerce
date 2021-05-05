import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.config.js'
import Routes from './routers/index.js'

connectDb()

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
Routes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))