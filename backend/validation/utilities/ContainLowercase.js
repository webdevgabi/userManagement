const regex = /[a-z]/;

module.exports = function(){

    if(this.data && !regex.test(this.data)){
        this.errors.push(`The ${this.name} must contain at least one lowercase letter`);
    }

    return this;

}