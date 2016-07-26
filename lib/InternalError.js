var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function InternalError(message, error) {
    CubeIoError.call(this, message, error);
}

util.inherits(InternalError, CubeIoError);

module.exports = InternalError;
