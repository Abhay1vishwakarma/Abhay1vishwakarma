const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(201).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all user",
      error,
    });
  }
};

// create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // validation
    if (!username || !email || !password) {
      return res.status(400).send({
        message: "please fill all fields",
        success: false,
      });
    }
    // exisiting user
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // seve the user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    return res.status(201).send({
      success: true,
      message: "new user created ",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in register callback",
      success: false,
      error,
    });
  }
};

// login user
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        message: "please enter email and password",
        success: false,
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        message: "email is not reserved",
        success: false,
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).send({
        message: "email or password is wrong.",
        success: false,
      });
    }
    return res.status(200).send({
      message: "login seccessfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).send({
      message: "error in login callback",
      success: false,
      error,
    });
  }
};
