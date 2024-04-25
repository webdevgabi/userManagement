const regex = /[\W]/;

module.exports = function(){

    if(this.data && !regex.test(this.data)){
        this.errors.push(`The ${this.name} must contain at least one special character`);
    }

    return this;

}