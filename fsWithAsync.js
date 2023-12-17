const fs = require("node:fs/promises")

// we can use the promises in the both ways

fs.readFile("./greet.txt" , "utf-8")
.then((data) => console.log(data))
.catch((error) => console.log(error))

async function readFile(){
    try{
        const read = await fs.readFile("./greet.txt" , "utf-8")
        console.log(read)
    }
    catch(error){
        console.log(error)
    }
}
readFile()