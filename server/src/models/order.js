import mongoose from 'mongoose'
import { cartSchema } from './cart.js'
import { uniqueId } from '../helpers/common.js'

const Schema = mongoose.Schema

export const orderSchema = Schema({
    orderNumber: {
        type: String,
        default: uniqueId()
    },
    user: {
        type: Object,
        required: [true, 'user is required!']
    },
    products: {
        type: [cartSchema],
        required: [true, 'products is required!']
    },
    paymentMethod: {
        type: String,
        enum: {
            values: ['COD', 'ATM', 'MOMO'],
            message: 'paymentMethod {VALUE} is not supported'
        },
        required: [true, 'paymentMethod is required!']
    },
    shippingInfo: {
        type: Object,
        required: [true, 'shippingInfo is required!']
    },
    shippingFee: {
        type: Number,
        required: [true, 'shippingFee is required!'],
        min: [0, 'shippingFee is invalid']
    },
    amount: {
        type: Number,
        required: [true, 'amount is required!'],
        min: [1000, 'amount is invalid']
    },
    totalAmount: {
        type: Number,
        required: [true, 'totalAmount is required!'],
        min: [1000, 'totalAmount is invalid']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
export default Order