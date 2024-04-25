const { hash } = require("bcrypt")

module.exports = async (data, user) => {

    const { _id, username, displayName, email, password, ...details } = data;
    const schema = {...user};
    
    if(username) schema.username = username

    if(displayName) schema.displayName = displayName

    if(email) schema.email = email

    if(password) schema.password = await hash(password, 10)

    if(details) schema.details = {...user.details, ...details}

    return schema;

}