// `tls`: This module provides a way to create TLS/SSL servers and clients. An example application of this module would be to create a secure web server that uses HTTPS with a valid SSL/TLS certificate.

const tls = require('tls');
const fs = require('fs');
// load server key and certificate
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};
// create a secure server
const server = tls.createServer(options, (socket) => {
  console.log('client connected');
  // send data to the client
  socket.write('Hello, client!');
  // receive data from the client
  socket.on('data', (data) => {
    console.log('received: ' + data);
  });
  // end the connection when the client disconnects
  socket.on('end', () => {
    console.log('client disconnected');
  });
});
// listen on port 8000
server.listen(8000, () => {
  console.log('server started');
});
