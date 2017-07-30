'use strict'
// 1 打印hello world 

console.log('hello world');

// 2 定时打印hello world

setTimeout(function(){
    console.log('hello world');
} ,10000 );


// 3 读取文件并输出 

const fs = requier('fs');
fs.readFile('./01_quick_start.js','utf8',(err,data)=>{
    console.log(data);
});
