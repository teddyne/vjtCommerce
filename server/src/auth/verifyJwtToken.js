import jwt from 'jsonwebtoken'
import { secretKey } from '../config/config.js'

export const verifyToken = (req, res, next) => {
    console.log('verify', req)
    const token = req.headers['authorization']
    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'No token provided.'
        })
    }

    jwt.verify(token[1], secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: 'Fail to Authentication. Error: ' + err
            })
        }
        req.userId = decoded.id
    })
    next()
}