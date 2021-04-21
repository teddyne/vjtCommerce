import mongoose from 'mongoose'
import { imageSchema } from './image.js'
import { categorySchema } from './category.js'

var Schema = mongoose.Schema

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
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
    discountPrice: {
        type: Number
    },
    categories: {
        type: [categorySchema],
        required: true
    },
    images: {
        type: [imageSchema],
        required: true
    },
    widgets: {
        type: [Schema.Types.ObjectId]
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