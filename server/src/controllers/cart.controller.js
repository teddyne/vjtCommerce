import Cart from '../models/cart.js'

export const getCarts = async (req, res) => {
    try {
        const queryResult = Cart.find()
        if (req.query.productId) {
            queryResult.where('_productId').equals(req.query.productId)
        }
        if (req.query.userId) {
            queryResult.where('_userId').equals(req.query.userId)
        }
        const carts = await queryResult
        res.status(200).json(carts)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addCart = async (req, res) => {
    const {
        _userId,
        _productId,
        name,
        price,
        discount,
        quantity,
        thumbnail
    } = req.body
    const newCart = new Cart({
        _userId,
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
        res.status(200).json('updated successfully')
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}


