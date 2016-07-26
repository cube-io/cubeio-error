var CubeIoError = require("../lib/CubeIoError.js");
var MissingArgumentError = require("../lib/MissingArgumentError.js");

describe("MissingArgumentError", function() {
    var missingArgumentName = "fruit";
    var message = "This is a message.";
    var error = new Error();

    it("can be constructed", function() {
        expect(MissingArgumentError).not.toThrow();
    });

    it("has a message when supplied", function() {
        var ce = new MissingArgumentError(missingArgumentName, message);
        expect(ce.message).toBe(message);
    });

    it("does not have a message when none is supplied", function() {
        var ce = new MissingArgumentError();
        expect(ce.message).not.toBeDefined();
    });

    it("does not have a error when none is supplied", function() {
        var ce = new MissingArgumentError();
        expect(ce.error).not.toBeDefined();
    });

    it("has a stack trace when no error is supplied", function() {
        var ce = new MissingArgumentError();
        expect(ce.stack).toEqual(jasmine.any(String));
    });

    it("does not have a stack trace, when an error is supplied", function() {
        var ce = new MissingArgumentError(missingArgumentName, message, error);
        expect(ce.stack).not.toBeDefined();
    });

    it("has an error when supplied", function() {
        var ce = new MissingArgumentError(missingArgumentName, message, error);
        expect(ce.error).toBe(error);
    });

    it("is of type Error", function() {
        var ce = new MissingArgumentError();
        expect(ce instanceof Error).toBeTruthy();
    });

    it("is of type CubeIoError", function() {
        var ce = new MissingArgumentError();
        expect(ce instanceof CubeIoError).toBeTruthy();
    });

    it("is of type MissingArgumentError", function() {
        var ce = new MissingArgumentError();
        expect(ce instanceof MissingArgumentError).toBeTruthy();
    });

    it("has a missingArgumentName", function() {
        var e = new MissingArgumentError(missingArgumentName);
        expect(e.missingArgumentName).toEqual(missingArgumentName);
    });
});
