const router = require("express").Router()

// UTILITIES
const UserByToken = require("../utilities/userByToken")

// DATABASE
const deleteOne = require("../database/deleteOne")
const deleteMany = require("../database/deleteMany")

router.delete("/", async (req, res) => {
    const userByToken = await UserByToken(req.headers.token)

    if(!userByToken) {
        res.status(422).send("Invalid token")
        return;
    }

    const isDeletedOne = await deleteOne({ collection: "users", condition: { _id: userByToken._id } })
    const isDeletedMany = await deleteMany({ collection: "tokens", condition: { owner: userByToken._id } })

    isDeletedOne && isDeletedMany ? 
    res.send("Successful delete") :
    res.status(500).send("Unsuccessful delete")
})

module.exports = router