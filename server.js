// Main server code
import express from "express" // Or const express = require('express');
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

const port = process.env.PORT || 8000
app.use(express.static('./public')) // To get static resources

app.use(cors()) // Middleware
app.use(express.json()) // Body parser. Server can accept JSON in body of request

app.get('/',(req,res) => {
    res.send('This is home page')
});

app.use("*", (req,res) => res.status(404).json({error: "Page not found"})) // Or app.all('*',(req,res) => {res.status(404).send('Not Found')})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
export default app