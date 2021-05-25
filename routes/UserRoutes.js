const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/UserControllers")
/**
 * @swagger
 * /user/register/:
 *  post:
 *    description: Use to signup. for new members.
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Name of user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: password
 *        in: body
 *        description: pass of user
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
router.post(/register/, userControllers.userRegisterController);
/**
 * @swagger
 * /user/login/:
 *  post:
 *    description: Use to login members
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Name of user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: password
 *        in: body
 *        description: pass of user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully logged in user
 *      '403':
 *        description: wrong username/pass
 */
router.post(/login/, userControllers.userLoginController);

module.exports = router