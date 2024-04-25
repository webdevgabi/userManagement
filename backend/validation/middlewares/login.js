const Validator = require("..")

module.exports = async (req, res, next) => {
    const { username, password } = req.body;
    let errors;

    // Username validation
    const usernameValidation = new Validator(username, 'username')
    usernameValidation.Required()
    if(usernameValidation.errors.length !== 0) {
        errors = {...errors, username: usernameValidation.errors}
    }

    // Password validation
    const passwordValidation = new Validator(password, 'password')
    passwordValidation.Required()
    if(passwordValidation.errors.length !== 0) {
        errors = {...errors, password: passwordValidation.errors}
    }

    if(errors) {
        res.status(422).json({ validation: errors })
        return;
    }

    next()

}