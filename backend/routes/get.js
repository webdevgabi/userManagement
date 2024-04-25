const router = require("express").Router()

// UTILITIES
const UserByUsername = require("../utilities/userByUsername")
const UserByToken = require("../utilities/userByToken")

// SCHEMA
const authorizedGet = require("../schema/authorizedGet")
const unAuthorizedGet = require("../schema/unAuthorizedGet")

router.get("/:username?", async (req, res) => {

    const userByToken = await UserByToken(req.headers.token)

    if(req.params.username) {
        const userByUsername = await UserByUsername(req.params.username)

        if(!userByUsername) {
            res.status(404).json({ validation: { username: ["No user found at the username."] } })
            return;
        }
        
        res.json( JSON.stringify(userByUsername) === JSON.stringify(userByToken) ? authorizedGet(userByUsername) : unAuthorizedGet(userByUsername) )
        return;
    }

    if(!userByToken) {
        res.status(422).send("Invalid token")
        return;
    }

    res.json(authorizedGet(userByToken))
})

module.exports = router