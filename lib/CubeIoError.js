function CubeIoError(message, error) {
    this.message = message;

    if(!error) {
        Error.captureStackTrace(this, CubeIoError);
        return;
    }

    this.error = error;
}

CubeIoError.prototype = Object.create(Error.prototype);

module.exports = CubeIoError;
