import Cart from '../models/cart.js'

export const getCarts = async (req, res) => {
    try {
        const queryResult = Cart.find()
        if (req.query.productId) {
            queryResult.where('_productId').equals(req.query.productId)
        }
        const carts = await queryResult
        res.status(200).json(carts)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addCart = async (req, res) => {
    const {
        _productId,
        name,
        price,
        discount,
        quantity,
        thumbnail
    } = req.body
    const newCart = new Cart({
        _productId,
        name,
        price,
        discount,
        quantity,
        thumbnail
    })
    try {
        await newCart.save()
        res.status(201).json(newCart)
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}

export const updateCart = async (req, res) => {
    const {
        _productId,
        quantity
    } = req.body
    
    try {
        Cart.updateOne( { _productId: _productId }, { quantity: quantity }, (err, docs) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated Cart : ", docs);
            }
        })
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}


