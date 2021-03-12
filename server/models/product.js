import mongoose from 'mongoose'
import { categorySchema } from './category.js'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: Object,
        required: true
    },
    discount: {
        type: Number
    },
    category: {
        type: categorySchema,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

var Product = mongoose.model('Product', productSchema)

export default Product