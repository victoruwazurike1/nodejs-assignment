// `crypto`: This module provides cryptographic functionality, such as hashing, encryption, and decryption. An example application of this module would be to secure data transmission over the network.

const crypto = require('crypto');
// Hashing a string
const hash = crypto.createHash('sha256');
hash.update('Hello, world!');
console.log(hash.digest('hex'));
