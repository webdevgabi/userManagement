const router = require("express").Router()
const tokenSchema = require("../schema/token")
const insertOne = require("../database/insertOne")

const userByUsername = require("../utilities/userByUsername")
const isPasswordMatch = require("../utilities/isPasswordMatch")

const loginValidation = require("../validation/middlewares/loginValidation")
router.use(loginValidation)

router.post("/", async (req, res) => {

    const user = await userByUsername(req.body.username)
    if(!user) {
        res.status(422).json({ validation: { username: ["No user found at the username."] } })
        return;
    }

    const isPasswordCorrect = isPasswordMatch(req.body.password, user.password)
    if(!isPasswordCorrect) {
        res.status(422).json({ validation: { password: ["Wrong password"] } })
        return;
    }

    const token = await tokenSchema(user._id)
    const isInserted = await insertOne({ collection: 'tokens', data: token })

    isInserted ?
    res.json(token.token) :
    res.status(500).send("Unsuccessful login.")
})

module.exports = router