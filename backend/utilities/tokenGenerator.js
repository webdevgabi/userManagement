const find = require("../database/find")
let myString = "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM0123456789";

const tokenGenerator = async () => {
    let isUnique = true;
    let hash = '';

    while(isUnique) {
        for (let i = 0; i < 50; i++) hash += myString[Math.floor(Math.random() * myString.length)];

        const isUniqueToken = await find({ collection: 'tokens', condition: { token: hash } });

        if(!isUniqueToken) {
            isUnique = false;
            return hash;
        };

        hash = '';
    }

};

module.exports = tokenGenerator;