const express = require("express");
const {
  getAllBlogs,
  createBlogs,
  updateBlog,
  getBlogById,
  deleteBlog,
  userBlog,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// get all blog
router.get("/all-blog", getAllBlogs);

// create blog
router.post("/create-blog", createBlogs);

// update blog
router.put("/update-blog/:id", updateBlog);

// get single blog
router.get("/get-blog/:id", getBlogById);

// delete blog
router.delete("/delete-blog/:id", deleteBlog);

// user blogs
router.get("/user-blog/:id", userBlog);

module.exports = router;
