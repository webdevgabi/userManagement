const find = require("../database/find")

module.exports = async (req, res, next) => {

    const { username } = req.body;

    const isFound = await find({ collection: "users", condition: { username: username } })

    if(!isFound) {
        res.status(422).json({ validation: { email: ["No user found at the email address."] } })
        return;
    }
    
    req.user = isFound[0]
    next()

}