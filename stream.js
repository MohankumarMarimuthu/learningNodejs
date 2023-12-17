const fs = require("node:fs")

const readableStream = fs.createReadStream("./greet.txt" , {
    encoding: "utf-8",
    // highWaterMark: 2, it will work the chunk of data with 2 bytes
    
}) // it will take which file has to read 

const writableStream = fs.createWriteStream("./greet2.txt") // it will take which file to write

readableStream.on("data" , (chunk) => {
   console.log(chunk)
   writableStream.write(chunk);
})  // stream is an extend of event module so readableStream.on perform action and write file chunk of datas