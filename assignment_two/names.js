var arr = new Array();
const router = async function (req, res) {
   //  GET: /api/my_name
  if (req.url === "/api/my_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/save_name
  if (req.url === "/api/save_name" && req.method === "POST") {
    try {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(
        "Which name would you like to add to your existing array?",
        (new_name) => {
          console.log(`You have successfully added ${new_name} to the array!`);
          arr.push(new_name);
          readline.close();
        }
      );
      // The body displays immediately we load the save_name endpoint
      let body = "Please make sure you add the new name through the terminal";

      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(body));
    } catch (error) {
      // Print out the error if there is any error
      console.log(error);
    }
  }
};

module.exports = router;
