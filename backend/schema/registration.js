const { hash } = require("bcrypt")

module.exports = async (data) => {
    const { username, displayName, email, password, ...details } = data
    const currentDate = new Date();

    return {
        username: username,
        displayName: displayName,
        email: email,
        password: await hash(password, 10),
        details: details,
        createdAt: currentDate,
        updatedAt: currentDate
    }

}