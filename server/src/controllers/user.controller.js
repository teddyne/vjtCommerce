import User from '../models/user.js'

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

export const updateShippingInfo = async(req, res) => {
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