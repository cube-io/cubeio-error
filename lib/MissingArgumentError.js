var CubeIoError = require("./CubeIoError.js");
var util = require("util");

function MissingArgumentError(missingArgumentName, message, error) {
    this.missingArgumentName = missingArgumentName;
    CubeIoError.call(this, message, error);
}

util.inherits(MissingArgumentError, CubeIoError);

module.exports = MissingArgumentError;
