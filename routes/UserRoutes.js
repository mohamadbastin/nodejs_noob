const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/UserControllers")

router.post(/register/, userControllers.userRegisterController);
router.post(/login/, userControllers.userLoginController);

module.exports = router