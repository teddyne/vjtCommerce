import mongoose from 'mongoose'

export const widgetSchema = mongoose.Schema({
    name: {
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

var Widget = mongoose.model('Widget', widgetSchema)

export default Widget