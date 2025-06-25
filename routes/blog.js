const express = require("express");
const protect = require("../middleware/auth")
const router = express.Router();


// Import Controller
const {dummyLink,likePost,unlikePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");


// Mapping
router.get("/dummyroute", protect, dummyLink);
router.post("/comments/create",protect ,createComment);
router.post("/posts/create",protect, createPost);
router.get("/posts",getAllPosts); 
router.post("/likes/like",protect,likePost);
router.post("/likes/unlike",protect,unlikePost);

// Export
module.exports = router;