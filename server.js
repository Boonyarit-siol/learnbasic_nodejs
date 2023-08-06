let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');
let eventEmiiter = new events.EventEmitter();

//Create an event handler;
let myEventHandler = function(){
    console.log('I hear scream');
}
//Assige the event handler to an event;

eventEmiiter.on('scream',myEventHandler);

//File the 'scream' event;
eventEmiiter.emit('scream');
// rs.on('open',function(){
//     console.log('This file is open');
// })
// create address
// let adr = 'https://localhost:8000/default.html?year=2023&month=August';
// let q= url.parse(adr,true);

// console.log(q.host); //return localhosts:8000
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;  // keep data
// console.log(qdata);
// console.log(qdata.month);
// console.log(qdata.year);
// http.createServer(function(req,res){
//     let q= url.parse(req.url,true);
//     let filename = "."+q.pathname;  //.somepath
//     // res.writeHead(200,{'Content-Type':'text/html'});
//     // let q = url.parse(req.url,true).query;
//     // let txt = q.year + ""+q.month;
    
//     // res.end(txt);
//     //Read File Node.js
//     fs.readFile(filename, function(err,data) {
//         if (err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end('404 Not Found');

//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//             return res.end();
//     })
// }).listen(8000);
// //Create File
// fs.appendFile('mynewfield.txt','Hello Word',function(err){
//     if(err) throw err;
//     console.log('Saved!'); 
// })
// //Open File
// fs.open('mynewfile2.txt','w',function(err,file){
//     if(err) throw err;
//     console.log('Saved!');
// })
// //สร้างไฟล์ใหม่ can write file เเทนที่เนื้่อหา
// fs.writeFile('mynewfile3.txt','This is replace new file3',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// })
// //update text
// fs.appendFile('mynewfile3.txt','This is update text file3',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// })
// // delete file
// fs.unlink('mynewfile3.txt',function(err){
//     if(err) throw err;
//     console.log('File Deleted!');
// })
// //rename file
// fs.rename('mynewfile2.txt','myrenameFile.txt',function(err){
//     if(err) throw err;
//     console.log('File Rename');
// })
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(uc.upperCase('Boonyarit Sioloetwong'));
    res.end();

}).listen(8000);

