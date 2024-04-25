const router = require("express").Router()

// DATABASE
const insertOne = require("../database/insertOne")

// SCHEMA
const registrationSchema = require("../schema/registration")

// VALIDATION
const validation = require("../validation/middlewares/registration")
router.use(validation)

router.post("/", async (req, res) => {
    
    const userSchema = await registrationSchema(req.body)
    const isInserted = await insertOne({ collection: 'users', data: userSchema })

    isInserted ? 
    res.send("Successful registration") :
    res.status(500).send("Unsuccessful registration.")

})

module.exports = router