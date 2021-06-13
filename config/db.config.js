import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vjtCommerceDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (ex) {
        console.error(`Error: ${ex.message}`)
        process.exit(1)
    }
}

export default connectDb