'use strict';
//1:引入核心对象
const http = require('http');
//引入fs核心对象
const fs = require('fs');
//创建服务器
const server = http.createServer((req, res) => {

    // switch(req.url){
    //     case '/':
    //     case '/index.html':
    //         res.writeHead(200,{
    //             'content-type':'text/html;charset=utf-8'
    //         });
    //         fs.readFile('./index.html',(err,data)=>{
    //             if(err) throw err;
    //             res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
    //         });
    //         break;
    //     case '/static/index.css':
    //          fs.readFile('./static/index.css',(err,data)=>{
    //             if(err) throw err;
    //             res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
    //         });
    //         break;
    //      case '/static/1.jpg':
    //          fs.readFile('./static/1.jpg',(err,data)=>{
    //             if(err) throw err;
    //             res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
    //         });
    //         break;
    //      case '/static/index.js':
    //          fs.readFile('./static/index.js',(err,data)=>{
    //             if(err) throw err;
    //             res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
    //         });
    //         break;
    //     default:
    //         res.end('404');
    // }
    // 
    // 
    // 
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf-8'
        });
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
        });
    } else if (req.url.startsWith('/static')) {
        //    /static/index.css
        //    /static/index.js
        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

server.listen(12345, () => {
    console.log('服务器启动了');
})