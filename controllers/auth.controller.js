import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({
            email,
            password: hashPassword
        })
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json('Error: ' + error)
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(200).json({ auth: false, error: 'User not found.' })
        }
        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) {
            res.status(200).json({ auth: false, accessToken: null, error: 'Invalid password' })
        }
        const token = jwt.sign({ id: user._id }, process.env.AUTH_SECRET || 'secretKey', {
            expiresIn: 86400 // expires in 24 hours
        })

        const userInfo = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            avatarUrl: user.avatarUrl,
            shippingInfo: user.shippingInfo,
            carts: user.carts
        }
        res.status(200).json({ auth: true, accessToken: token, user: userInfo })
    } catch (error) {
        res.status(500).json({ auth: false, error: error.message })
    }
}