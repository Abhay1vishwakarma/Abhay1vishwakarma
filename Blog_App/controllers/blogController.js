const mongoose = require("mongoose");
const userModel = require("../models/userModel");
// const blogModel = require("../models/blogModel");
const blogModel = require("../models/blogModel");

//  get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate("user");

    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "no blogs found",
      });
    }

    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "all blog list",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in get blogs",
      error,
    });
  }
};

// create Blogs
exports.createBlogs = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    // validation
    if (!title || !description || !image || !user) {
      return res.status(200).send({
        success: false,
        message: "please provide all fields",
      });
    }
    const existingUser = await userModel.findById(user);
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: " unable to find user",
      });
    }

    const newBlog = new blogModel({ title, description, image, user });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();

    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "new blog created ",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in create blogs",
      error,
    });
  }
};

//  update Blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "blog updated ",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in update blogs",
      error,
    });
  }
};

//  single Blog
exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);

    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this id",
      });
    }

    return res.status(200).send({
      success: true,
      message: "get single blog ",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in get single blog",
      error,
    });
  }
};

//  delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel
      .findOneAndDelete(req.params.id)
      .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    // if (!blog) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "can not delete with this id",
    //   });
    // }
    return res.status(200).send({
      success: true,
      message: "blog deleted seccessfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in get delete blog",
      error,
    });
  }
};

// get user blog
exports.userBlog = async (req, res) => {
  try {
    const userBlog = await userModel.findById(req.params.id).populate("blogs");
    if (!userBlog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "user blogs ",
      userBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in user blog",
      error,
    });
  }
};
