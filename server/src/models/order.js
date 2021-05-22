import mongoose from 'mongoose'
import { cartSchema } from './cart.js'

const Schema = mongoose.Schema

export const orderSchema = Schema({
    user: {
        type: Object,
        required: true
    },
    products: {
        type: [cartSchema],
        required: true
    },
    paymentMethod: {
        enum: ['COD', 'ATM', 'MOMO'],
        required: true,
        default: 'Customer'
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
export default Order