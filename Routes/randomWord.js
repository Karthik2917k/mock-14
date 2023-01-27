const express = require("express");
const server = express.Router();

const arr = ['Karthik', 'masai', 'prateek','yogesh','revision','placements'];
server.get("/",(req,res)=>{
    const randomWord = arr[Math.floor(Math.random() * arr.length)];
    return res.status(200).json({error:false,data:randomWord});
})

module.exports = server;