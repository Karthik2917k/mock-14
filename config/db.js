const mongoose  = require("mongoose");

const connect = async() =>{
    return await mongoose.connect("mongodb+srv://mongo:mongo@cluster0.oigsdcy.mongodb.net/?retryWrites=true&w=majority")    
}

module.exports = connect;