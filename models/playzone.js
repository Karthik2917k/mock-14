const mongoose  = require("mongoose");

const playzoneSchema = new mongoose.Schema({
    playername:{
        type:String,
        required:true,
        unique:true
    },
    low:String,
    medium:String,
    high:Number,
},
{
    timestamps:true,
    versionKey:false
})

const PlayZone = mongoose.model("play",playzoneSchema);

module.exports = PlayZone;