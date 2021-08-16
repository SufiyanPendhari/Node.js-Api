const mongoose = require("mongoose");


const db =  mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type: String ,
        required:true
    }
    
})

module.exports = mongoose.model('Blog',db);