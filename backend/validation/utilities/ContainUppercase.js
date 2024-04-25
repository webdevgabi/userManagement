const regex = /[A-Z]/;

module.exports = function(){

    if(this.data && !regex.test(this.data)){
        this.errors.push(`The ${this.name} must contain at least one uppercase letter`);
    }

    return this;

}