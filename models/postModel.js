// import mongoose
const mongoose= require("mongoose");


// ṛoute handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.ObjectId,
        ref:"Comment"
    }]
});

// exports
module.exports = mongoose.model("Post",postSchema);