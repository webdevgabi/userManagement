const router = require("express").Router()
const tokenSchema = require("../schema/token")
const insertOne = require("../database/insertOne")

const loginValidation = require("../middlewares/loginValidation")
router.use(loginValidation)

const userByUsername = require("../middlewares/userByUsername")
router.use(userByUsername)

const passwordIsMatch = require("../middlewares/passwordIsMatch")
router.use(passwordIsMatch)

router.post("/", async (req, res) => {

    const token = await tokenSchema(req.user._id)
    const isInserted = await insertOne({ collection: 'tokens', data: token })

    isInserted ?
    res.json(token.token) :
    res.status(500).send("Unsuccessful login.")
})

module.exports = router