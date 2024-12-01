import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
// implementations for all methods to resolve requests to the user endpoints

dotenv.config();
const JWT_SECRET= process.env.JWT_SECRET || 'myJWTSecret';

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const user = new User({
    username: username,
    email: email,
    password: hashedPass,
  });
  await user.save();
  res.status(201).json({
    message: "User created successfully",
    user_id: user._id,
  });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  let success = false;
  if (user) {
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      success = true;
    }
  }
  if (success) {
    const id = user._id;
    const token = jwt.sign({id}, JWT_SECRET, {
      expiresIn: "1h",
    })
    return res.status(200).json({ message: "Login successful.", token: token, user: user });
  } else {
    return res.status(404).json({ error: "Invalid credentials" });
  }
};

export default {
  signup,
  login,
};
