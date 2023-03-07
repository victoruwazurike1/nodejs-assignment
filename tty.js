// `tty`: This module provides a way to interact with a terminal. An example application of this module would be to create a command-line interface that uses colors and formatting.

const tty = require('tty');
// check if the standard input is a TTY
if (tty.isatty(process.stdin)) {
  console.log('stdin is a TTY');
} else {
  console.log('stdin is not a TTY');
}
// create a new TTY ReadStream
const ttyReadStream = new tty.ReadStream(process.stdin);
// listen for data events on the TTY ReadStream
ttyReadStream.on('data', (data) => {
  console.log('data received:', data.toString());
});
