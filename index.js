module.exports = {
    NotFound: require("./lib/NotFoundError.js"),
    Conflict: require("./lib/ConflictError.js"),
    InvalidArgument: require("./lib/InvalidArgumentError.js"),
    MissingArgument: require("./lib/MissingArgumentError.js"),
    Unauthorized: require("./lib/UnauthorizedError.js"),
    Internal: require("./lib/InternalError.js")
};
