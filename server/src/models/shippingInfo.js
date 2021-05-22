import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const shippingInfoSchema = Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ward: {
        type: Object,
        required: true
    },
    district: {
        type: Object,
        required: true
    },
    region: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
})

const ShippingInfo = mongoose.model('ShippingInfo', shippingInfoSchema)
export default ShippingInfo