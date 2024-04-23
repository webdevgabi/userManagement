const router = require("express").Router()

router.post("/", (req, res) => {
    res.json({ path: "/login" })
})

module.exports = router