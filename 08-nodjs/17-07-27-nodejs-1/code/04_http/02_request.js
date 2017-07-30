'use strict';
//1:引入核心对象
const http = require('http'); //引入一个模块
//  http相关文件中，一定有一句话module.exports = xxx;
//2:创建服务器对象
const server = http.createServer((req,res)=>{
    //3:处理具体的响应
    console.log(req.url);
    console.log(req.method);
    // console.log(req.headers); 是一个对象
    console.log(req.headers['user-agent'])
})

//4:开启服务器端口监听
server.listen(80,()=>{
    console.log('服务器启动了');
})