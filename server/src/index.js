import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.config.js'
import productRoutes from './routers/product.routes.js'
import categoryRoutes from './routers/category.routes.js'
import widgetRoutes from './routers/widget.routes.js'
import fileRoutes from './routers/file.routes.js'
import cartRoutes from './routers/cart.routes.js'
import userRoutes from './routers/user.routes.js'
import regionRoutes from './routers/region.routes.js'
import authRoutes from './routers/auth.routes.js'

connectDb()

dotenv.config()

const app = express()

//app.use(bodyParser.json({ limit: '30mb', extended: true }))
//app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/widgets', widgetRoutes)
app.use('/api', fileRoutes)
app.use('/api/carts', cartRoutes)
app.use('/api/users', userRoutes)
app.use('/api/regions', regionRoutes)
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))