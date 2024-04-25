const find = require("../database/find")

module.exports = async username => {

    const isFound = await find({ collection: "users", condition: { username: username } })
    return isFound ? isFound[0] : false

}