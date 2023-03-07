// `assert`: This module provides a simple set of assertion functions that can be used for testing purposes. An example application of this module would be to write unit tests for a Node.js application.


const assert = require('assert');
// Testing for an error
assert.throws(() => {
  throw new Error('Oops!');
}, Error);
console.log(Error)