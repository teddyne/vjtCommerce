import mongoose from 'mongoose'

export const imageSchema = mongoose.Schema({
    original: {
        type: String,
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

var Category = mongoose.model('Category', categorySchema)

export default Category