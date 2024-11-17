const {
  signupvalidation,
  loginvalidation,
} = require("../Middleware/AuthValidation");
const { signup, login } = require("../Controllers/AuthController");
const router = require("express").Router();


router.post("/login", loginvalidation, login);
router.post("/signup", signupvalidation, signup);

module.exports = router;
