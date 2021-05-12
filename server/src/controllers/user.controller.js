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
    } catch (ex) {
        res.status(409).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: ex.message })
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
        res.status(404).json({ message: ex.message })
    }
}

export const updateCarts = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user.carts) {
            let existedCart = _.find(user.carts, x => x._productId === req.body._productId)
            if (existedCart) {
                existedCart.quantity += 1
            } else {
                user.carts = [...user.carts, req.body]
            }

        } else {
            user.carts = req.body
        }
        user.carts = user.carts !== null ? user.carts.concat(req.body) : req.body
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: ex.message })
    }
}