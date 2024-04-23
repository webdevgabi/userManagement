const router = require("express").Router()

router.get("/:username?", (req, res) => {

    if(req.params.username) {
        res.json({ path: "/get", user: req.params.username })
        return;
    }

    res.json({ path: "/get" })
})

module.exports = router