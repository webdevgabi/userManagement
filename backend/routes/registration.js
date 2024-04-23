const router = require("express").Router()

router.post("/", (req, res) => {
    res.json({ path: "/registration" })
})

module.exports = router