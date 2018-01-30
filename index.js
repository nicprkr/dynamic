const express = require("express");
const app = express();
//asks server to find the public port and use that, ELSE port 3000
const port = process.env.PORT || 3000;

app.get("/", (req, resp)=>{
        resp.end("Welcome to my app");
        });

app.listen(port, (err)=>{
          if(err){
        console.log(err);
        return false;
          }
    console.log("port is running!");
});