const operations = require("./add")
const { add , sub} = operations // destructuring also works
console.log(operations.add(3,7));
console.log(operations.sub(3,10));

require("./batman")
require("./superman")

const superHero = require("./super-hero");
console.log(superHero.getName())
superHero.setName("mohan")
console.log(superHero.getName())

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName());

const superHero = require("./super-hero")

const batman = new superHero("batman")
console.log(batman.getName())
batman.setName("bruce wayne")
console.log(batman.getName())
const superman = new superHero("superman")
console.log(superman.getName())

const add = require("./math")
console.log(add(4,4))

const obj1 = {
    name: "mohankumar"
}
console.log(obj1)
let obj2 = obj1;
obj2={
    name: "joshi"
} 
console.log(obj1)
console.log(obj2)



setTimeout(() => console.log('hello timer') , 0)
for(let i=0 ; i < 5000000000 ; i++){}