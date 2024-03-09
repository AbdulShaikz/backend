import dotenv from 'dotenv';
import { connectDB } from './db/index.js';

dotenv.config({
    path: './env'
});             //for loading the env variables (or making availabe to all files) as soon as the application starts
connectDB();



/* // Approach 1 of connecting DB
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error) => {
            console.log("Error");
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error while connecting...");
    }
})(); */