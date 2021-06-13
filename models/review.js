import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const reviewSchema = Schema({
    user : {
        type: Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)
export default Review