const express = require('express')
const app = express()
const port = 3000
const connectDB = require("./config/db")
connectDB();

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`The port is runing on port ${port}`)
})