const regex = (/[A-Za-z0-9 _]/);

module.exports = function(){

    if(this.data && !regex.test(this.data)){
        this.errors.push(`The ${this.name} can only contain letters and numbers.`);
    }

    return this;

}