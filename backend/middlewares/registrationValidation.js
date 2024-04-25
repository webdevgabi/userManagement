const Validator = require("../validation")

module.exports = async (req, res, next) => {
    const { username, displayName, email, password } = req.body;
    let errors;

    // Username validation
    const usernameValidation = new Validator(username, 'username')
    await usernameValidation.Required().Length(4).IsInUse()
    if(usernameValidation.errors.length !== 0) {
        errors = {...errors, username: usernameValidation.errors}
    }

    // Display Name validation
    const displayNameValidation = new Validator(displayName, "displayName", "display name")
    displayNameValidation.Required().Length(4).NotContainSpecial()
    if(displayNameValidation.errors.length !== 0) {
        errors = {...errors, displayName: displayNameValidation.errors}
    }

    // Email validation
    const emailValidation = new Validator(email, 'email')
    await emailValidation.Required().IsEmail().IsInUse()
    if(emailValidation.errors.length !== 0) {
        errors = {...errors, email: emailValidation.errors}
    }

    // Password validation
    const passwordValidation = new Validator(password, 'password')
    await passwordValidation.Required().Length(8).ContainLowercase().ContainUppercase().ContainNumber().ContainSpecial()
    if(passwordValidation.errors.length !== 0) {
        errors = {...errors, password: passwordValidation.errors}
    }

    if(errors) {
        res.status(422).json({ validation: errors })
        return;
    }

    next()

}