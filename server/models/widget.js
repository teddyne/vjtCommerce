import mongoose from 'mongoose'

export const widgetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        enum: ['Home', 'Product Detail'],
        required: true,
        default: 'Home'
    },
    order: {
        type: Number,
        required: true,
        default: 0
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})

var Widget = mongoose.model('Widget', widgetSchema)

export default Widget