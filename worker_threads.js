// `worker_threads`: This module provides a way to create worker threads in a Node.js application. An example application of this module would be to offload CPU-intensive tasks to a separate thread to avoid blocking the event loop.

const { Worker } = require('worker_threads');
// Create a new worker thread
const worker = new Worker('./worker.js', { workerData: 'Hello, worker!' });
// Listen for messages from the worker
worker.on('message', (message) => {
  console.log(`Received message from worker: ${message}`);
});
// Send a message to the worker
worker.postMessage('Hello from the main thread!');
