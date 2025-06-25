// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// bussiness logic
exports.createComment = async(req,res)=>{
    try{
        // fetch data from req body
        const {post,user,body} = req.body;
        // create a cmt object
        const comment = new Comment({
            post,user,body
        });
        

        // save the new cmt into the db
        const savedComment = await comment.save();


        // find the post by id,add new cmt to its cmt array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new:true})
                            .populate("comments") //populate the cmt array with cmt documents
                            .exec();
        
        res.json({
            post:updatedPost,

        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error While creating comment",
        });
    }
};