const find = require("../database/find")

module.exports = async token => {

    if(!token) {
        return false
    }

    const isFound = await find({ collection: "tokens", condition: { token: token } })
    
    if(!isFound) {
        return false
    }

    const userByToken = await find({ collection: "users", condition: { _id: isFound[0].owner } })
    return userByToken ? userByToken[0] : false

}