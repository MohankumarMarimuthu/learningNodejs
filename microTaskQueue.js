setTimeout(() => {
    console.log('timeout function 1')
  },0)
setTimeout(() => {
    console.log('timeout function 2')
    process.nextTick(() => console.log("this is process.nextTick inside the timeout"));
  },0)
setTimeout(() => {
    console.log('timeout function 3')
  },0)

process.nextTick(() => console.log("this is process.nextTick1"));
process.nextTick(() => {
    console.log("this is process.nextTick2") 
process.nextTick(() => {
    console.log("this is nested process next tick in nextTick2")
})
});
process.nextTick(() => console.log("this is process.nextTick3"));

Promise.resolve().then(() => console.log("this is promise resolve 1"))
Promise.resolve().then(() => {
    console.log("this is promise resolve 2")
    process.nextTick(() => {
        console.log("this is nested process next tick in promise")
    })
})
Promise.resolve().then(() => console.log("this is promise resolve 3"))


setTimeout(() => console.log('1') , 1000)
setTimeout(() => console.log('2') , 500)
setTimeout(() => console.log('3') , 0)  // out of this is 3 , 2, 1