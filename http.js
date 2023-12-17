const http = require("node:http");
// const url = require("url"); 

const superHero = {
    firstName: "bruce",
    lastName: "wayne"
}


const server = http.createServer((req, res) => { 
    if(req.url === "/"){
        res.writeHead(200, { "Content-Type" : "text/plain"})
        res.end("Homepage")
    }else if(req.url === "/about"){
        res.writeHead(200, { "Content-Type" : "application/json"})
        res.write(JSON.stringify(superHero))  // need to stringify through json before passing it to client http protocol works based on json only
        res.end()
    }
    else if(req.url === "/contact-us"){
        res.writeHead(200, { "Content-Type" : "text/plain"})
        res.end("contact page")
    }
    else{
        res.writeHead(404);
        res.end("page not found")
    }
})

server.listen(8090, () => {
    console.log("server started and listening for the request")
})