import dotenv from "dotenv";
import express from "express";
import { connectdb } from "./config/database.js";

dotenv.config({path:"./config/config.env"});
connectdb();
const app=express();
app.get('/',(req,res)=>{
    res.send("hello from server");
})
app.listen(process.env.PORT,()=>{
    console.log('server started on port 5000');
})
export default app;



