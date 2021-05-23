const express = require("express")
const router = express.Router()
const blogControllers = require("../controllers/BlogControllers")

router.post(/create/, blogControllers.createPostController);
router.get(/list/, blogControllers.blogListController);
router.get('/:id', blogControllers.blogRetrieveController);


module.exports = router