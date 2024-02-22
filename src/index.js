import 'dotenv/config'
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
      console.log(`Server is running at port : ${process.env.PORT}`);
   });
})
.catch((error)=>{
   console.log(`Mongodb connection failed! : ${error}`);
})
















/*
import express from "express";

const app = express ()

(async () =>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("ERROR: ",error);
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log(`APP is listening at: ${process.env.PORT}`);
     })
    }
    catch(error){
      console.error("ERROR: ",error);
      throw error;
    }
})()

*/