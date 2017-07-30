    // - 回写响应数据 `res.write('xxx');`
    // - 写数据并且告知客户端已经写完 `res.end('xxx');`
    // - 设置头并响应状态码 `res.writeHead(状态码,头对象);`
    // - 多次设置头信息 `res.setHeader('key','value');`
    // 

'use strict';
//1:引入核心对象
const http = require('http'); //引入一个模块
const server = http.createServer((req,res)=>{

    //3:处理响应
    // res.write('haha'); //没有给出响应结束
    // res.end('hehe'); //回写数据并结束响应
    // res.writeHead(500);
    
    //修改头信息
    res.writeHead(500,{
        'Accept':'txt'
    });
    // res.writeHead(500,{
    //     'Connection':'close'
    // });
    //告知浏览器响应完毕
    // res.setHeader('Accept','txt');
    // Can't set headers after they are sent.
    // res.setHeader('Connection','close');
    res.end('ok');
});

//4:开启服务器端口监听
server.listen(80,()=>{
    console.log('服务器启动了');
})