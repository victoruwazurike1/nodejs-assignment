// `string_decoder`: This module provides a way to decode Buffer objects into strings. An example application of this module would be to decode binary data into text.

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const buffer = Buffer.from('Hello, World!', 'utf8');
console.log(decoder.write(buffer)); // Output: Hello, World!
