const tokenGenerator = require("../utilities/tokenGenerator")

module.exports = async (owner) => {

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);

    return {
        owner: owner,
        token: await tokenGenerator(),
        expiryDate: expiryDate
    }
}