const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// post
// api/user/register
//public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all the fields are mandatory!");
  }
  const userAvailable = await User.findOne({ User });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already exists");
  }
  //hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password",hashedPassword);
const user = await User.create({
    username,
    email,
    password:hashedPassword,
});

console.log(`user created ${user}`);
if(user){
    res.status(201).json({_id: user.id,email:user.email});
}else{
    res.status(400);
    throw new Error("invalid user data");
}

  res.json({ message: "register the user" });
});

// post
// api/user/login
//public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "user login" });
});

// get
// api/user/current
//private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user" });
});
module.exports = { registerUser, loginUser, currentUser };
