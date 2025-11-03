import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        //connection aane ke baad jo bhi yhn response hai, use hold kr skte hein
        console.log(`\n MongoDB connect !! DB HOST: ${connectionInstance.connection.host}`)
        //pura jo mongoDB ka url hai jhn se connection ho rha hai, usko le lein
    } catch(error){
        console.log("MONGODB connection FAILED ",error);
        process.exit(1)  //read about it
    }
}

export default connectDB 