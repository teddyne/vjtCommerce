import Order from '../models/order.js'

export const getOrders = async (req, res) => {
    try {
        const queryResult = Order.find()
        if (req.query.userId) {
            queryResult.where('user._id').equals(req.query.userId)
        }
        const orders = await queryResult
        res.status(200).json(orders)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const getOrder = async (req, res) => {
    try {
        const queryResult = Order.findOne()
        if (req.params.id) {
            queryResult.where('_id').equals(req.query.id)
        }
        if (req.params.orderNumber) {
            queryResult.where('orderNumber').equals(req.params.orderNumber)
        }
        const order = await queryResult
        res.status(200).json(order)
    } catch (ex) {
        res.status(404).json({ message: ex.message })
    }
}

export const createOrder = async (req, res) => {
    const {
        orderNumber,
        user,
        products,
        paymentMethod,
        shippingInfo,
        shippingFee,
        amount,
        totalAmount
    } = req.body
    try {
        const newOrder = new Order({
            orderNumber,
            user,
            products,
            paymentMethod,
            shippingInfo,
            shippingFee,
            amount,
            totalAmount
        })
        await newOrder.save()
        res.status(201).json(newOrder)
    } catch (ex) {
        res.status(409).json({ message: ex.message })
    }
}
