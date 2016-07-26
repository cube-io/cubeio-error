var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function UnauthorizedError(message, error) {
    CubeIoError.call(this, message, error);
}

util.inherits(UnauthorizedError, CubeIoError);

module.exports = UnauthorizedError;
