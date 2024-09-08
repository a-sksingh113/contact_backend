const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// POST
// api/user/register
// private
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;


  // Check if all fields are present
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  
  // Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password", hashedPassword);

  // Create new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    //confirmPassword:hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// POST
// api/user/login
// Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if all fields are present
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Find user by email
  const user = await User.findOne({ email });

  // Compare password with hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );

    res.status(200).json({ accessToken }); 
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// acces token 

// GET
// api/user/current
// Private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
