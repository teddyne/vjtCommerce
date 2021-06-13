import mongoose from 'mongoose'
import { shippingInfoSchema } from './shippingInfo.js'
import { cartSchema } from './cart.js'

const Schema = mongoose.Schema

export const userSchema = Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email']
    },
    phone: {
        type: String
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