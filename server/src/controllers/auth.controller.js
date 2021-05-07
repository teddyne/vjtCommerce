import User from '../models/user.js'
import { secretKey } from  '../config/config.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        console.log('signup')
        console.log('body', req.body)
        const {
            name,
            phone,
            password
        } = req.body
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({
            name,
            phone,
            password: hashPassword
        })
        console.log('user', user)
        await user.save()
        res.status(201).json('Signed up successfully!')
    } catch (error) {
        res.status(500).json('Error: '+ error)
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ phone: req.body.phone})
        if (!user) {
            res.status(404).json('User not found.')
        }
        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isValidPassword) {
            res.status(401).json({ auth: false, accessToken: null, reason: 'Invalid password' })
        }
        const token = jwt.sign({ id: user._id }, secretKey, {
            expiresIn: 86400 // expires in 24 hours
        })

        const userInfo = {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            avatarUrl: user.avatarUrl,
            shippingInfo: user.shippingInfo
        }

        res.status(200).json({ auth: true, accessToken: token, user: userInfo })
    } catch (error) {
        res.status(500).json('Error: '+ error)
    }
}