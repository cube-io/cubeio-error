var index = require("../index.js");

describe("index", () => {
    it("exposes ConflictError", () => {
        expect(index.Conflict).toEqual(jasmine.any(Function));
        expect(index.Conflict).not.toThrow();
    });

    it("exposes InternalError", () => {
        expect(index.Internal).toEqual(jasmine.any(Function));
        expect(index.Internal).not.toThrow();
    });

    it("exposes InvalidArgumentError", () => {
        expect(index.InvalidArgument).toEqual(jasmine.any(Function));
        expect(index.InvalidArgument).not.toThrow();
    });

    it("exposes MissingArgumentError", () => {
        expect(index.MissingArgument).toEqual(jasmine.any(Function));
        expect(index.MissingArgument).not.toThrow();
    });

    it("exposes NotFoundError", () => {
        expect(index.NotFound).toEqual(jasmine.any(Function));
        expect(index.NotFound).not.toThrow();
    });

    it("exposes UnauthorizedError", () => {
        expect(index.Unauthorized).toEqual(jasmine.any(Function));
        expect(index.Unauthorized).not.toThrow();
    });
});
