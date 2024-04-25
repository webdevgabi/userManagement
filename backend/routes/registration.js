const router = require("express").Router()
const insertOne = require("../database/insertOne")
const registrationSchema = require("../schema/registration")

const validation = require("../middlewares/registrationValidation")
router.use(validation)

router.post("/", async (req, res) => {
    
    const userSchema = await registrationSchema(req.body)
    const isInserted = await insertOne({ collection: 'users', data: userSchema })

    isInserted ? 
    res.send("Successful registration") :
    res.status(500).send("Unsuccessful registration")

})

module.exports = router