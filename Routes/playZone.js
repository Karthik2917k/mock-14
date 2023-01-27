const express = require("express");
const PlayZone = require("../models/playzone");
const server = express.Router();

server.post("/",async(req,res)=>{
    let {playername,low,medium,high} = req.body;
    console.log(low);
    try{
        let player = await PlayZone.findOne({playername});
        if(player){
            if(low){
                let updatePlayer = await  PlayZone.updateOne(
                    { playername },
                    {
                      $set: { low},
                      $currentDate: { lastModified: true }
                    }
                  );
                return res.status(201).json({error:false,data:updatePlayer})
            }
            else if(medium){
                let updatePlayer = await  PlayZone.updateOne(
                    { playername },
                    {
                      $set: { medium},
                      $currentDate: { lastModified: true }
                    }
                  );
                return res.status(201).json({error:false,data:updatePlayer})
            }
            if(high){
                let updatePlayer = await  PlayZone.updateOne(
                    { playername },
                    {
                      $set: { high},
                      $currentDate: { lastModified: true }
                    }
                  );
                return res.status(201).json({error:false,data:updatePlayer})
            }
            else{
                return res.status(404).json({error:true,message:"Something wet wrong try again later "})
            }
        }else{
            if(low){
                let createPlayer = await  PlayZone.create({playername,low})
             return res.status(201).json({error:false,data:createPlayer})
            }
            else if(medium){
                let createPlayer = await  PlayZone.create({user,medium})
                return res.status(201).json({error:false,data:createPlayer})
            }
            else if(high){
                let createPlayer = await  PlayZone.create({user,high})
                return res.status(201).json({error:false,data:createPlayer})
            }
            else{
                return res.status(404).json({error:true,message:"Something wet wrong try again later from creating user game"})
            }
        }
    }catch(e){
        return res.status(404).json({error:true,message:e.message})
    }
})

server.get("/",async(req,res)=>{
  let playername = req.query.name;
  let player = await PlayZone.findOne({playername})
  return res.status(201).json({error:false,data:player})
})

module.exports = server;