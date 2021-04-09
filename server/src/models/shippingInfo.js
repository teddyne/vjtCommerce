import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const shippingInfoSchema = Schema({
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ward: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const ShippingInfo = mongoose.model('ShippingInfo', shippingInfoSchema)
export default ShippingInfo