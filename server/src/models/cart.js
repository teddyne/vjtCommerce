import mongoose from 'mongoose'
import { imageSchema } from './image.js'

const Schema = mongoose.Schema

export const cartSchema = Schema({
    _productId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: imageSchema,
        required: true
    }
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart