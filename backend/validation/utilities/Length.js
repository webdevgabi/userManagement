
module.exports = function(min = 0, max = 5000) {

    if(this.data && (min > this.data.length || this.data.length > max)) {
        max === 5000 ? 
        this.errors.push(`The ${this.name} must be at least ${min} characters long.`) :
        this.errors.push(`The ${this.name} must be a minimum of ${min} characters and a maximum of ${max} characters long.`)
    }

    return this;

}