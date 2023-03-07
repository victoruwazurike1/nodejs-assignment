// `v8`: This module provides access to the V8 engine, which is the JavaScript engine used by Node.js. An example application of this module would be to get information about the memory usage of the Node.js process.

const v8 = require("v8");
// serialize an object
const data = { name: "John", age: 30 };
const serializedData = v8.serialize(data);
console.log(serializedData);
