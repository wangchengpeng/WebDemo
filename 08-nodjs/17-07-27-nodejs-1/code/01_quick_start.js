'use strict'
// * 打印hello world
// * 定时打印hello world
// * 读取文件并输出 
// * 自定关机
// * 创建一个服务器，记录访问次数

//使用控制台打印hello world
// console.log('hello world');

// 定时打印hello world
setTimeout(function(){
    console.log('hello world');
},999000);

// * 读取文件并输出 
// const fs = require('fs');
// fs.readFile('./01_quick_start.js','utf8',(err,data)=>{
//     console.log(data);
// });

// * 自定关机
// const child_process = require('child_process');
// // child_process.exec('shutdown -s -t 3600');
// child_process.exec('shutdown -a');

// * 创建一个服务器，记录访问次数
// const http = require('http');
// let sum = 0;
// let server = http.createServer((req,res)=>{
//     res.end('当前访问数量是'+ (++sum));
// });

// server.listen(80,()=>{
//     console.log('服务器启动了');
// });