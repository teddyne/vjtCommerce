import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'No token provided.'
        })
    }

    jwt.verify(token.split(' ')[1], process.env.AUTH_SECRET || 'secretKey', (err, decoded) => {
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