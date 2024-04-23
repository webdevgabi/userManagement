const router = require("express").Router()

router.delete("/", (req, res) => {
    res.json({ path: "/delete" })
})

module.exports = router