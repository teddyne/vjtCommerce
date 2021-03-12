import mongoose from 'mongoose'

const schema = mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    widgetId: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

var ProductWidget = mongoose.model('ProductWidget', schema)

export default ProductWidget