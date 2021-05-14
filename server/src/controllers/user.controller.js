import User from '../models/user.js'
import _ from 'lodash'

export const getUsers = async (req, res) => {
    try {
        const queryResult = User.find()
        if (req.query.id) {
            queryResult.where('_id').equals(req.query.id)
        }
        const users = await queryResult
        res.status(200).json(users)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addUser = async (req, res) => {
    const {
        name,
        phone,
        password
    } = req.body
    const newUser = new User({
        name,
        phone,
        password
    })
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateShippingInfo = async (req, res) => {
    try {
        await User.updateOne( { _id: req.params.id }, { shippingInfo: req.body }, (err, docs) => {
            if (err) {
                console.log(err)
            }
        })
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getCartsByUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user.carts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateCarts = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user.carts) {
            let existedCart = _.find(user.carts, x => String(x._productId) === req.body._productId)
            if (existedCart) {
                existedCart.quantity += 1
            } else {
                user.carts = [...user.carts, req.body]
            }
        } else {
            user.carts = req.body
        }
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateCartQuantity = async (req, res) => {
    try {
        const {
            quantity
        } = req.body
        const user = await User.findById(req.params.id)
        const cart = _.find(user.carts, x => String(x._id) === req.params.cartId)
        console.log('update quanity',  cart)
        if (cart) {
            cart.quantity = quantity
            await user.save()
        } else {
            res.status(400).json({ message: 'No cart to update'})
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteCart = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user.carts) {
            user.carts = _.filter(user.carts, x => String(x._id) !== req.params.cartId)
            await user.save()
        } else {
            res.status(400).json({ message: 'No cart to delete'})
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}