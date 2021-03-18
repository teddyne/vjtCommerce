import Product from '../models/product.js'


export const getProducts = async (req, res) => {
    try {
        console.log(req.query)
        var a = req.query
        var b = a.category
        console.log(b)
        // let products = []
        // if (req.query != null) {
        //     //product = await Product.findById(req.params.id)
        //     console.log(req.query)
        // } else {
        //     products = await Product.find()
        // }
        const products = await Product.find({ 'category.name': req.query.category })
        //const products = await Product.find()
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

export const getSimilarProducts = async (req, res) => {
    try {
        console.log(req)
        //const product = await Product.findById(req.params.id)
        //res.status(200).json('')
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
