import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({
    limit: "16kb",
}));    //if data comes from form

app.use(express.urlencoded({
    extended: true,
    limit: "16kb", 
}));

app.use(express.static("public"));  //storing files/assets on server which can be accessible
app.use(cookieParser());    //cookieParser helps in accessing and setting cookies of the user browsers from the server

//import routes
import userRouter from './routes/user.routes.js';


//routes declaration
app.use('/api/v1/users', userRouter);

export {app};