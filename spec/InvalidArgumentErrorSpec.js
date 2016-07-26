var CubeIoError = require("../lib/CubeIoError.js");
var InvalidArgumentError = require("../lib/InvalidArgumentError.js");

describe("InvalidArgumentError", function() {
    var invalidArgumentName = "fruit";
    var invalidArgumentValue = "burger";
    var message = "This is a message.";
    var error = new Error();

    it("can be constructed", function() {
        expect(InvalidArgumentError).not.toThrow();
    });

    it("has a message when supplied", function() {
        var ce = new InvalidArgumentError(invalidArgumentName, invalidArgumentValue, message);
        expect(ce.message).toBe(message);
    });

    it("does not have a message when none is supplied", function() {
        var ce = new InvalidArgumentError();
        expect(ce.message).not.toBeDefined();
    });

    it("does not have a error when none is supplied", function() {
        var ce = new InvalidArgumentError();
        expect(ce.error).not.toBeDefined();
    });

    it("has a stack trace when no error is supplied", function() {
        var ce = new InvalidArgumentError();
        expect(ce.stack).toEqual(jasmine.any(String));
    });

    it("does not have a stack trace, when an error is supplied", function() {
        var ce = new InvalidArgumentError(invalidArgumentName, invalidArgumentValue, message, error);
        expect(ce.stack).not.toBeDefined();
    });

    it("has an error when supplied", function() {
        var ce = new InvalidArgumentError(invalidArgumentName, invalidArgumentValue, message, error);
        expect(ce.error).toBe(error);
    });

    it("is of type Error", function() {
        var ce = new InvalidArgumentError();
        expect(ce instanceof Error).toBeTruthy();
    });

    it("is of type CubeIoError", function() {
        var ce = new InvalidArgumentError();
        expect(ce instanceof CubeIoError).toBeTruthy();
    });

    it("is of type InvalidArgumentError", function() {
        var ce = new InvalidArgumentError();
        expect(ce instanceof InvalidArgumentError).toBeTruthy();
    });

    it("has both invalidArgumentName and invalidArgumentValue", function() {
        var e = new InvalidArgumentError(invalidArgumentName, invalidArgumentValue);
        expect(e.invalidArgumentName).toEqual(invalidArgumentName);
        expect(e.invalidArgumentValue).toEqual(invalidArgumentValue);
    });
});
