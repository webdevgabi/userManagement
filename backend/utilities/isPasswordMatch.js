const { compare } = require("bcrypt")

module.exports = async (bodyPassword, userPassword) => {
    const isPasswordMatch = await compare(bodyPassword, userPassword);
    return isPasswordMatch
}