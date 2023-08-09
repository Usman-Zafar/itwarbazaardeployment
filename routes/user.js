const userControllers = require("../controllers/userController"); // Update the path accordingly

const { Router } = require("express");
const router = Router();

router.post("/signup", userControllers.Signup);
router.post("/signin", userControllers.Signin);

module.exports = router;
