var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function ForbiddenError(message, error) {
    CubeIoError.call(this, message, error);
}

util.inherits(ForbiddenError, CubeIoError);

module.exports = ForbiddenError;
