

const validation = function(data, type, name = type){
    this.data = data;
    this.type = type;
    this.name = name;
    this.errors = []
}

const Required = require("./utilities/Required")
validation.prototype.Required = Required;

const Length = require("./utilities/Length")
validation.prototype.Length = Length;

const IsEmail = require("./utilities/IsEmail")
validation.prototype.IsEmail = IsEmail;

const IsInUse = require("./utilities/IsInUse")
validation.prototype.IsInUse = IsInUse

const ContainLowercase = require("./utilities/ContainLowercase")
validation.prototype.ContainLowercase = ContainLowercase;

const ContainUppercase = require("./utilities/ContainUppercase")
validation.prototype.ContainUppercase = ContainUppercase;

const ContainNumber = require("./utilities/ContainNumber")
validation.prototype.ContainNumber = ContainNumber;

const ContainSpecial = require("./utilities/ContainSpecial")
validation.prototype.ContainSpecial = ContainSpecial;

const NotContainSpecial = require("./utilities/NotContainSpecial")
validation.prototype.NotContainSpecial = NotContainSpecial;

module.exports = validation