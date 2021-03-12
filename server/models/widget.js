import mongoose from 'mongoose'

const schema = mongoose.Schema({
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

var Widget = mongoose.model('Widget', schema)

export default Widget