// import mongoose
const mongoose= require("mongoose");


// ṛoute handler
const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //Ref to the post model
    },
    user:{
        type:String,
        required:true,
    },
});

// exports
module.exports = mongoose.model("Like",likeSchema);