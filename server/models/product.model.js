import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    price: String
},{
    timestamps: true
})

var Product = mongoose.model('Product', productSchema);

export default Product