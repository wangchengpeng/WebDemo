'use strict';
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/testCors')){
    

    // res.setHeader('Access-Control-Allow-Origin','http://localhost:8000')
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','DELETE,PUT,POST,GET');
    res.setHeader('Access-Control-Allow-Headers','myheader');


      res.end('ok');
    }
});


server.listen(80,()=>{
    console.log('服务器B启动在80端口');
})