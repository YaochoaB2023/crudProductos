import { mongoUrl } from "./config.js";
import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        
        console.log("conectado a mongo")
    } catch (error) {
        console.log(error);
        process.exit(1)    }
}