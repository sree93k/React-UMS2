import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { error } from 'console';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connect to mongoDB");
})
.catch((err)=>{
    console.log(err);
})

const app=express()

app.use(express.json())

app.listen(4000,()=>{
    console.log("Server listening on port 4000");
})


app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

