import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const databaseName='vjtCommerceDb';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
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