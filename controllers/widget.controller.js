import Widget from '../models/widget.js'

export const getWidgets = async (req, res) => {
    try {
        const result = await (req.query.name 
                        ? Widget.findOne({ name: req.query.name}) 
                        : Widget.find({ location: 'Home'}).sort({ order: 1}))
        res.status(200).json(result)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const addWidget = async (req, res) => {
    const { 
        name,
        order,
        location
    } = req.body
    const newWidget = new Widget({ name, order, location })
    try {
        await newWidget.save()
        res.status(201).json(newWidget)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
