const Blog = require("../Models/BlogModel")
const jwtVerify = require("../Models/UserModel").getUserByToken

const createPostController = async (req, res) => {
    const token = await req.get("token")
    const { title, content } = await req.body
    // console.log(token)

    const a = await jwtVerify(token)
    if (a) {
        console.log("make")
        const p = await Blog.create({userId: a.id, title: title, content: content})
        return res.json({msg: "ok", post: p})

    } else {
        console.log("nope")
        return res.json({msg: "something went wrong"})
    }
}

const blogListController = async (req, res) => {
    res.status(200)
    // console.log( await Blog.findAll())
    return res.json({posts: await Blog.findAll({order: [['updatedAt', 'DESC']]})})
}

const blogRetrieveController = async (req, res) => {

    const p = await Blog.findOne({where: {id: req.params.id}})
    if (p){
        res.status(200)
        // console.log( await Blog.findAll())
        return res.json({post: p})
    } else {
        res.status(404)
        return res.json({msg: "no post found"})
    }

}


module.exports = {
    createPostController,
    blogListController,
    blogRetrieveController
}