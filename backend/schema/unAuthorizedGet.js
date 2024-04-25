
module.exports = (user) => {

    const { username, displayName, details } = user

    return {
        username: username,
        displayName: displayName,
        details: details,
        isEditable: false
    }

}