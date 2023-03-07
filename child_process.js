// `child_process`: This module provides a way to spawn child processes from a Node.js application. An example application of this module would be to execute external commands, such as running a shell script or a command-line tool.

const { exec } = require('child_process');

// Executing a shell command
exec('dir', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
