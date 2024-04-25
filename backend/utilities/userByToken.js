const find = require("../database/find")
const deleteMany = require("../database/deleteMany");

module.exports = async token => {

    if(!token) {
        return false
    }

    await deleteMany({ collection: 'tokens', condition: { expiryDate: { $lt:  new Date() } } })
    const isFound = await find({ collection: "tokens", condition: { token: token } })
    
    if(!isFound) {
        return false
    }

    const userByToken = await find({ collection: "users", condition: { _id: isFound[0].owner } })
    return userByToken ? userByToken[0] : false

}