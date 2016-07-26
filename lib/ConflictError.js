var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function ConflictError(message, error) {
    CubeIoError.call(this, message, error);
}

util.inherits(ConflictError, CubeIoError);

module.exports = ConflictError;
