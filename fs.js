const fs = require("node:fs")

// we can read the file in two methods sync , async methods

// sync manner
console.log("first")
const fileContents = fs.readFileSync("./dummy.txt" , "utf-8");
console.log(fileContents)

// async manner

console.log("second")

fs.readFile("./dummy.txt" , "utf-8" , (error , data) => {
  if(error){
    console.log(error)
  }
  else{
    console.log(data , "async")
  }
})

console.log("third")

// same way we can write file also in two methods , sync & async

// sync
fs.writeFileSync("./greet.txt", "vanakkam");

// async


fs.writeFile("./greet.txt" , "elarukum vanakkam" , (error) => {
    if(error)console.log(error)
    console.log('file written')
})
 
// by default file write method will rewrite the existing content , if we just want to 
// append instead of writting we can use the below

fs.writeFile("./greet.txt" , " nanbargale" , {flag: "a"} , (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('file rewritten using appending')
    }
})

