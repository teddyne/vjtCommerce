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