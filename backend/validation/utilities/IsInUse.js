const find = require("../../database/find")

module.exports = async function() {

    const isInUse = await find({ collection: 'users', condition: { [this.type]: this.data } })
    if(this.data && isInUse){
        this.errors.push(`The ${this.name} address is already registered. Please use another one.`);
    }

    return this;

}