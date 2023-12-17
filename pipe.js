const fs = require("node:fs")

const readableStream = fs.createReadStream("./greet.txt" , {
    encoding: "utf-8",
    // highWaterMark: 2, it will work the chunk of data with 2 bytes
    
}) // it will take which file has to read 

const writableStream = fs.createWriteStream("./greet2.txt") // it will take which file to write

readableStream.pipe(writableStream) // pipe is like normal pipe tank to tap it holds the water flow
//  same pipe holds to readable stream to writeable steam


// it allows us to create zip files 
// zlib has something transformation stream

// const zlib = require("node:zlib") 

// const gzip = zlib.createGzip()

// readableStream.pipe(gzip).pipe(fs.WriteStream("./greet2.txt"));