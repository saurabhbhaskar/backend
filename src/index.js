// require('dotenv').config({path: './env'});
// this require statement disturbe the consistency of code as below we use import therefore we use import below and config it. but we have to make changes in package.json file,
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js", change in package.json

import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { DB_NAME } from "./constants.js"
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGODB connection failed", error);
})





// // This is the first approach to connect to the database

// import express from 'express';
// const app = express()

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on ${process.env.PORT}`);
//         })

//     } catch(error) {
//         console.error("ERROR: ", error)
//         throw error;
//     }
// })()
