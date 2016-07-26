var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function NotFoundError(message, error) {
    CubeIoError.call(this, message, error);
}

util.inherits(NotFoundError, CubeIoError);

module.exports = NotFoundError;
