//*** 1. database se jb bhi connect karne ke koshish karenge toh problem aa skti hai -> (try catch) mein raap kro , ya (promises)***/
//*** 2. database is always in another continent ->time lagta hai, mtlb -> (async await) lagana he padega
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()









/*
import express from "express";

const app = express()
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("err: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error){
        console.error("error: ",error)
        throw err
    }
})()

*/