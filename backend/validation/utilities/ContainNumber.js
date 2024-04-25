const regex = /\d/;

module.exports = function(){

    if(this.data && !regex.test(this.data)){
        this.errors.push(`The ${this.name} must contain at least one numeric character`);
    }

    return this;

}