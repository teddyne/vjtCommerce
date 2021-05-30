import Category from '../models/category.js'

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addCategory = async (req, res) => {
    const { name } = req.body
    const newCategory = new Category({ name })
    try {
        await newCategory.save()
        res.status(201).json(newCategory)
    } catch (ex) {
        res.status(409).json({ message: ex.message })
    }
}
