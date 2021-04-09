import mongoose from 'mongoose'
import { shippingInfoSchema } from './shippingInfo.js'

const Schema = mongoose.Schema

export const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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