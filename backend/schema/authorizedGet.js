
module.exports = (user) => {

    const { username, displayName, email, details } = user

    return {
        username: username,
        displayName: displayName,
        email: email,
        details: details,
        isEditable: true
    }

}