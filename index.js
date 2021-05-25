const errHandler = (err) => console.error("myError: ", err);

const express = require("express");
const db = require("./db");
const User = require("./Models/UserModel");
const Blog = require("./Models/BlogModel");
const app = express();
const userRoutes = require("./routes/UserRoutes")
const blogRoutes = require("./routes/BlogRoutes")
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

async function check() {
    try {
        await db.authenticate();
        console.log("DB Connected");
    } catch (err) {
        console.log("Failed to connect to DB");
        console.log("error: ", err);
    }
}

check();

const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title: "nodejs express noob testing around",
            description: "testing and playing",
            contact: {
                name: 'mohamad bastin'
            },
            servers: ['http://localhost:8000']
        }
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// (async () => {
//     await db.sync({force: true});
//
//     // const mmd = await User.create({name: "mmd", password: "1234"});
//     // const reza = await User.create({name: "reza"});
//
//     // const blog1 = await Blog.create({title: "post1", content: "jsafajsfgajhjasja", userId: mmd.id});
//     // const blog2 = await Blog.create({title: "post2", content: "jsafajsfgajhjasja", userId: mmd.id});
//     // const blog3 = await Blog.create({title: "post3", content: "jsafajsfgajhjasja", userId: mmd.id});
//
//
//     const users = await User.findAll();
//     // const blogs = await Blog.findAll();
//
//     console.log(users);
//     // console.log(blogs);
//
// })();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/user", userRoutes)
app.use("/blog", blogRoutes)
// userRoutes.initialize(app)

port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server started..."))