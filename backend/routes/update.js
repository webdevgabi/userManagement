const router = require("express").Router()

router.patch("/", (req, res) => {
    res.json({ path: "/update" })
})

module.exports = router