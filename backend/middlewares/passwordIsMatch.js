const { compare } = require("bcrypt")

module.exports = async (req, res, next) => {
    const userPassword = req.user.password;
    const bodyPassword = req.body.password;
    const passwordIsMatch = await compare(bodyPassword, userPassword);

    if(!passwordIsMatch) {
        res.status(422).json({ validation: { password: ["Wrong password"] } })
        return;
    }

    next()
}