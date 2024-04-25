const router = require("express").Router()

// DATABASE
const updateOne = require("../database/updateOne")

// UTILITIES
const UserByToken = require("../utilities/userByToken")

// SCHEMA
const userSchema = require("../schema/update")

// VALIDATION
const updateValidation = require("../validation/middlewares/update")
router.use(updateValidation)

router.patch("/", async (req, res) => {
    
    const userByToken = await UserByToken(req.headers.token)

    if(!userByToken) {
        res.status(422).send("Invalid token")
        return;
    }

    const updatedSchema = await userSchema(req.body, userByToken)
    const isUpdated = await updateOne({ collection: 'users', condition: { _id: userByToken._id }, data: updatedSchema })

    isUpdated ? 
    res.send("Successful update") :
    res.status(500).send("Unsuccessful update")
})

module.exports = router