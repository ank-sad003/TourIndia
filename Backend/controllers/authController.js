import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Extracted function to hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Extracted function to create default admin user
const createDefaultAdmin = async () => {
  const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL;
  const defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD;
  const hashedPassword = await hashPassword(defaultAdminPassword);
  return {
    username: 'Default Admin',
    email: defaultAdminEmail,
    password: hashedPassword,
    role: 'admin',
  };
};

// user register
export const register = async (req, res) => {
   try {
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(req.body.password, salt);
 
     const defaultAdminEmail = "admin@example.com";
     const defaultAdminPassword = "password";
 
     req.body.role = "user";
 
     if (req.body.email === defaultAdminEmail) {
       req.body.password = defaultAdminPassword;
       req.body.role = "admin";
     }
 
     const newUser = new User({
       username: req.body.username,
       email: req.body.email,
       password: hash,
       role: req.body.role,
     });
 
     await newUser.save();
 
     res.status(200).json({ success: true, message: "Successfully created!" });
   } catch (error) {
     res.status(500).json({ success: false, message: "Failed to create! Try again." });
   }
 };
 

// user login
export const login = async (req, res) => {
   try {
     const email = req.body.email;
     const password = req.body.password;
     const role = req.body.role;
 
     let user;
     if (role === 'admin') {
       user = await User.findOne({ email: 'admin@example.com', role: 'admin' });
       if (!user) {
         return res.status(404).json({ success: false, message: "User not found!" });
       }
       const checkCorrectPassword = await bcrypt.compare(password, user.password);
       if (!checkCorrectPassword) {
         return res.status(401).json({ success: false, message: "Incorrect email or password!" });
       }
     } else if (role === 'user') {
       user = await User.findOne({ email, role: 'user' });
       if (!user) {
         return res.status(404).json({ success: false, message: "User not found!" });
       }
       const checkCorrectPassword = await bcrypt.compare(password, user.password);
       if (!checkCorrectPassword) {
         return res.status(401).json({ success: false, message: "Incorrect email or password!" });
       }
     } else {
       return res.status(400).json({ success: false, message: "Invalid role!" });
     }
 
     const { password: pwd, role: userRole, ...rest } = user._doc;
 
     let tokenRole = userRole;
 
     const token = jwt.sign({ id: user._id, role: tokenRole }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });
 
     res.cookie("accessToken", token, {
       httpOnly: true,
       expires: token.expiresIn,
     }).status(200).json({ token, data: { ...rest }, role: tokenRole });
 
   } catch (error) {
     res.status(500).json({ success: false, message: "Failed to login" });
   }
 };