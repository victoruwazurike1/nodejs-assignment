// declare all the requirements
const http = require("http");
const getnames = require("./names.js");

const PORT = 8081;

const server = http.createServer((req, res) => {
    getnames(req, res);
});

// print out the PORT to indicate the exact PORT it's running on
server.listen(PORT, () => {
  console.log(`Note that the server is running on port ${PORT}`);
  
});
// print out the server link for easier access
console.log('Server running at http://127.0.0.1:8081/ Click to access the server');