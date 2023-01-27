const express  = require("express");
const server = express();
const cors = require("cors");
const connect = require("./config/db");
server.use(express.json());
server.use(cors());
const randomWordRouter = require("./Routes/randomWord");
const playerRouter = require("./Routes/playZone");
server.use("/playerzone",playerRouter);
server.use("/randomword",randomWordRouter)
server.post("/",(req,res)=>{
    let data = req.body;
    res.json({error:false,data});
})
server.get("/",(req,res)=>{
    return res.status(200).json({error:false,
    message:"Hey hi welcome to Mock-13"})
})

server.listen(8080,async()=>{
    try{
        await connect();
        console.log("Db Connected")
        console.log("Server Started on Port 8080")
    }
    catch(e){
        console.log(e.message)
    }
})