import User from "../models/User ";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User  not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
      expiresIn: "10d",
    });
    return res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        role: user.role,
        // email: user.email,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }

  console.log("Email:", email);
  console.log("Password:", password);
};

export { login };
