
module.exports = function() {

    if(!this.data){
        this.errors.push(`Please enter a(n) ${this.name}.`)
    }

    return this

}