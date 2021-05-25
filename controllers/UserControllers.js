const User = require("../Models/UserModel")
const bcrypt = require("bcrypt")
const SALT = 13
const jwt = require("jsonwebtoken")
const JWT_SECRET = "added 12 packages, and audited 340 packages in 4s"

const userRegisterController = async (req, res) => {
    // const name = req.body.get("name")
    // const password = req.body.get("password")
    // console.log(req)
    const {name, password} = req.body

    console.log(name)
    console.log(password)


    const hashedPassword = await bcrypt.hash(password, SALT)

    try {
        await User.create({name: name, password: hashedPassword});
        res.status(200)
        return res.json({"msg": "User Created Successfully "})
    } catch (err) {
        // console.log( err.code)
        if (err.parent.code === 'ER_DUP_ENTRY')  {
            res.status(401)
            return res.json({error: "Name Taken"})
        } else {
            console.log(err)
            res.status(500)
            return res.json({error: "idk"})

        }
    }


}

const userLoginController = async (req, res) => {
    const { name, password } = await req.body


    const u = await User.findOne({ where: { name: name } })
    if (!u) {
        res.status(403)
        return res.json({msg: "wrong user/pass"})
    }

    // console.log(u.name, u.password)
    if (await bcrypt.compare(password, u.password)){
        const t = jwt.sign({
            id: u.id,
            name: u.name
        }, JWT_SECRET)
        res.status(200)
        return res.json({msg: "ok", token: t})
    } else {
        res.status(403)
        return res.json({msg: "wrong user//pass"})
    }


}


module.exports = {
    userRegisterController,
    userLoginController
}