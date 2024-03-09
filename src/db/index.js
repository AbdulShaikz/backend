import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`ConnectionInstance: ${connectionInstance}`);
        console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error while connecting. Error: ", error);
        process.exit(1);    //1 status code is for exiting due to failure
    }
};

export {connectDB};