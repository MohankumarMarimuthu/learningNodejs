const path = require("node:path")

const file =path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  });

const file2 = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored',
  });
  

const file3 = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt',
});

console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  }))    // this one will convert object kind of type to string
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'))
console.log(path.parse('/home/user/dir/file.txt'))   // it will return string to object
console.log(path.parse('C:\\path\\dir\\file.txt'))

// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/png/image.gif'))
const events = require("node:events")

const emitter =new events.EventEmitter()

emitter.on('hello',(name , city)=> console.log("event is subscrubed" , name , city))

emitter.emit('hello',"Mohan" , "from erode");

