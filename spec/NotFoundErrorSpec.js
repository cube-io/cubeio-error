var CubeIoError = require("../lib/CubeIoError.js");
var NotFoundError = require("../lib/NotFoundError.js");

describe("NotFoundError", function() {
    var message = "This is a message.";
    var error = new Error();

    it("can be constructed", function() {
        expect(NotFoundError).not.toThrow();
    });

    it("has a message when supplied", function() {
        var ce = new NotFoundError(message);
        expect(ce.message).toBe(message);
    });

    it("does not have a message when none is supplied", function() {
        var ce = new NotFoundError();
        expect(ce.message).not.toBeDefined();
    });

    it("does not have a error when none is supplied", function() {
        var ce = new NotFoundError();
        expect(ce.error).not.toBeDefined();
    });

    it("has a stack trace when no error is supplied", function() {
        var ce = new NotFoundError();
        expect(ce.stack).toEqual(jasmine.any(String));
    });

    it("does not have a stack trace, when an error is supplied", function() {
        var ce = new NotFoundError(message, error);
        expect(ce.stack).not.toBeDefined();
    });

    it("has an error when supplied", function() {
        var ce = new NotFoundError(message, error);
        expect(ce.error).toBe(error);
    });

    it("is of type Error", function() {
        var ce = new NotFoundError();
        expect(ce instanceof Error).toBeTruthy();
    });

    it("is of type CubeIoError", function() {
        var ce = new NotFoundError();
        expect(ce instanceof CubeIoError).toBeTruthy();
    });

    it("is of type InternalError", function() {
        var ce = new NotFoundError();
        expect(ce instanceof NotFoundError).toBeTruthy();
    });
});
