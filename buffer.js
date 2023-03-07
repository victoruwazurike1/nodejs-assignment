// `buffer`: This module provides a way to handle binary data. An example application of this module would be to encode and decode data in different formats, such as Base64 or hexadecimal.

// Creating a buffer
const buffer = Buffer.from('Hello, world!', 'utf8');
// Converting a buffer to a string
console.log(buffer.toString('utf8'));
