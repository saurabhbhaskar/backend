import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
// here writing constants.js is important otherwise it will give error

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error("mongodb connection failed: ", err);
        process.exit(1);
    }
}

export default connectDB;





