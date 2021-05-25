const express = require("express")
const router = express.Router()
const blogControllers = require("../controllers/BlogControllers")

/**
 * @swagger
 * /blog/create/:
 *  post:
 *    description: Use to create blog posts.
 *    parameters:
 *      - name: title
 *        in: body
 *        description: title of post
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: token
 *        in: header
 *        description: user auth token
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: content
 *        in: body
 *        description: post content
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully created user
 *      '401':
 *        description: duplicate username
 *      '500':
 *        description: something went wrong
 */
router.post(/create/, blogControllers.createPostController);

/**
 * @swagger
 * /blog/list/:
 *  get:
 *    description: Use to request all posts
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get(/list/, blogControllers.blogListController);

/**
 * @swagger
 * /blog/post/{id}:
 *  get:
 *    description: Use to request specific post
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of post
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/post/:id', blogControllers.blogRetrieveController);


module.exports = router