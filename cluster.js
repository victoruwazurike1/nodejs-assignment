// `cluster`: This module provides a way to create child processes that share server ports. An example application of this module would be to create a cluster of workers that can handle incoming HTTP requests.

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
            if (cluster.isMaster) {
                console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
