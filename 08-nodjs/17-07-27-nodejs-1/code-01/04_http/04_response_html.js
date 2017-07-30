'use strict';
//1:引入核心对象
const http = require('http');
//引入fs核心对象
const fs = require('fs');
//创建服务器
const server = http.createServer((req,res)=>{
    //判断用户行为，响应数据
    // www.itcast.cn -> url : /
    // www.itcast.cn/index.html url: /index.html
    switch(req.url){
        case '/':
        case '/index.html':

            //通过服务器以数据格式契约的方式告知客户端以html解析+ utf8中文解码
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });

            fs.readFile('./index.html',(err,data)=>{
                if(err) throw err;
                res.end(data); //只能接受2中数据类型，1：字符串2：fs读出来的Buffer对象
            });
            break;
        default:
            res.end('404');
    }
});

server.listen(12345,()=>{
    console.log('服务器启动了');
})