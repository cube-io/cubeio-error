var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function InvalidArgumentError(invalidArgumentName, invalidArgumentValue, message, error) {
    this.invalidArgumentName = invalidArgumentName;
    this.invalidArgumentValue = invalidArgumentValue;
    CubeIoError.call(this, message, error);
}

util.inherits(InvalidArgumentError, CubeIoError);

module.exports = InvalidArgumentError;
