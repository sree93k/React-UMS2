import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import path from 'path'
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connect to mongoDB");
})
.catch((err)=>{
    console.log(err);
})

const _dirname=path.resolve()
const app=express()
app.use(express.static(path.join(_dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(_dirname,'client','dist','index.html'))
})
app.use(express.json())
app.use(cookieParser())
app.listen(4000,()=>{
    console.log("Server listening on port 4000");
})


app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})