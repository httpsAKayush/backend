import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true  //check more options

}))   //for middleware or to set configuration

//middleware-> checking login example

app.use(express.json({limit: "16kb"}))                        
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))     
app.use(cookieParser())  //5:47:00



export {app}