const router = require("express").Router()
const updateOne = require("../database/updateOne")

const UserByToken = require("../utilities/userByToken")
const userSchema = require("../schema/update")

const updateValidation = require("../validation/middlewares/updateValidation")
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