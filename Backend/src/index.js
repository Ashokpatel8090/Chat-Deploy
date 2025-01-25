import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';
import cors from 'cors'
import {app, server} from "./lib/socket.js"

dotenv.config();

const PORT = process.env.PORT || 8000

app.use(express.json({limit: '50mb'}));
app.use(cookieParser());




app.use(cors(
//     {
//     origin:'http://localhost:5173',
//     credentials:true,  
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],        
//     optionSuccessStatus:200,
// }
))

// app.options('*', (req, res) => {
//     res.header('Access-Control-Allow-Origin', req.headers.origin);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.sendStatus(200);
// });



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

server.listen(PORT, ()=>{
    connectDB();
    console.log(`server is started at PORT: ${PORT}`);
    
})