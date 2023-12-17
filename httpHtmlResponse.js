const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200 , { "Content-Type" : "text/html"});
    const indexHtml = fs.readFileSync("./index.html" , "utf-8")
    res.write(indexHtml);
    res.end();
    // fs.createReadStream(__dirname + "/index.html" , {
    //    encoding: "utf-8"}).pipe(res) // this is using pipe 
})


const server1 = http.createServer((req, res) => {
    const name = "Mohankumar Marimuthu"
    res.writeHead(200 , { "Content-Type" : "text/html"});
    let indexHtml = fs.readFileSync("./index.html" , "utf-8")
    indexHtml = indexHtml.replace("{{name}}" , name) // in this method we can dynamically inject some html elements
    res.write(indexHtml);
    res.end();
    
})

server.listen(8090, () => {
    console.log("server started and listening for the request")
})