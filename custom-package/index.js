// const iife = require("../iife.js") this is how we import local module
// const fs = require("node:fs") this is how we import built in module
const upperCase = require("upper-case").upperCase // this is how import third party module
// import { upperCase, localeUpperCase } from "upper-case";

function greet(name){
    console.log(upperCase(`Hello ${name}`))
}

greet("mohan")


module.exports = greet