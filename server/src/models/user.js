import mongoose from 'mongoose'
import { shippingInfoSchema } from './shippingInfo.js'
import { cartSchema } from './cart.js'

const Schema = mongoose.Schema

export const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String
    },
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer'
    },
    carts: {
        type: [cartSchema]
    },
    shippingInfo: {
        type: shippingInfoSchema
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
export default User