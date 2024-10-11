import User from "../models/User.js";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({
    message: "User created successfully",
    user_id: user._id,
  });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username || email)) {
    return res.status(400).json({ error: "Please provide username or email" });
  }
  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
    password: password,
  });
  if (!user) {
    return res.status(404).json({ error: "Invalid credentials" });
  }
  return res.status(200).json({ message: "Login successful." });
}

export default {
  signup,
  login
}
