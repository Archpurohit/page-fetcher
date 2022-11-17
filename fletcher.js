const request = require('request');
const fs = require("fs");

const path = process.argv[2];
const domain = process.argv[1];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(["content-length"]});
    }
  });
});
