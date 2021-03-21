import Product from '../models/product.js'

export const getProducts = async (req, res) => {
    try {
        const filter = req.query.category ? { 'category.name': req.query.category } : {}
        const query = Product.find(filter)
        if (req.query.currentProductId){
            query.where('_id').ne(req.query.currentProductId)
        }
        if (req.query.top) {
            query.limit(parseInt(req.query.top))
        }
        const products = await query
        res.status(200).json(products)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addProduct = async (req, res) => {
    const {
        name,
        description,
        price,
        discount,
        category,
        images,
        widgets
    } = req.body
    const newProduct = new Product(
        { 
            name,
            description,
            price,
            discount,
            category,
            images,
            widgets
        })
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}

export const updateProductImages = async (req, res) => {
    const {
        images
    } = req.body
    try {
        const product = await Product.findById(req.params.id)
        product.images.push(...images)
        await product.save()
        res.status(201).json(product)
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}