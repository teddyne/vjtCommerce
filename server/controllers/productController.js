import Product from '../models/product.js'


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addProduct = async (req, res) => {
    const { name, price } = req.body
    const newProduct = new Product({ name, price })
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}
