let express = require("express");
let fs = require("fs");
let app = express();
let port = process.env.port || 3000;
console.log(process.env.port,process.env.PORT);
app.use((req, res, next) => {
    fs.appendFile("ServerLogs.txt", req.url,(err)=>{
        // console.log(err);
    });
    next();
});
app.get("/", function (req, res) {
    res.send("<h1>My First App deployed in Heroku</h1>");
});
app.listen(port);
console.log(`server listening in port ${port}`);