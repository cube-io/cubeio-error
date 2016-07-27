cubeio-error
============

This library adds some standardization to errors, and provides an easy way of
building new error types.

All error types support passing a message and an
existing error.

The message will be stored in the `message`-field.

If an existing error is passed, it will be contained in the `error`-field. If
no error is passed, the constructor will create a new stack trace, which will be
stored in the `stack`-field.

### Usage

It is simple to require in the library and throw a standardized error:

```js
var ce = require("cubeio-error");
throw new ce.NotFound();
```

The real power, however, comes with matching an error type:

``` javascript
var ce = require("cubeio-error");

try {
    throw new ce.Internal();
}
catch(error) {
    if(error instanceof ce.NotFound) {
        // handle not found error
        return;
    }
    if(error) {
        // treat as another error type
        return;
    }
}
```

### Supported errors

We currently support these errors:

- `NotFound(message, error)`:
  Used when a resource could not be located.

- `Conflict(message, error)`:
  Used when a resource modification conflicts with existing internal state.

- `MissingArgument(missingArgumentName, message, error)`:
  Can be used when an argument was expected but not passed. The name of the
  missing argument must be supplied in the constructor, and will be stored as
  `missingArgumentName`.

- `InvalidArgument(invalidArgumentName, invalidArgumentValue, message, error)`:
  Can be used to indicate unexpected input-type or value. The error has an
  `invalidArgumentName`-field which stores the value of `invalidArgumentName`,
  and an `invalidArgumentValue`-field which stores the value of
  `invalidArgumentValue`.

- `Unauthorized(message, error)`:
  Can be used to indicate that authentication has failed. A message can be
  included to provide a reason as to what will happen as a consequence.

- `Forbidden(message, error)`:
  Can be used to indicate that the authentication is fine, and we know what
  entity is acting, but the action is forbidden for the authenticated user.

- `Internal(message, error)`:
  Used when an error happens, which can't be recognized as any other error type.
