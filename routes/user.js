const express = require("express");
const router = express.Router();
module.exports = router;
const {
  registerUser,
  userLogin,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword
} = require("../controllers/user");
const protect = require("../middleWares/auth");

router.post("/register", registerUser);
router.get("/login", userLogin);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);
