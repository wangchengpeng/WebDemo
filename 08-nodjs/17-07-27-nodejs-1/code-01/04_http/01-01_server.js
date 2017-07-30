'use strict';
// 1:引入核心对象
const http = require('http');
// http = xxx; 我们不会写这句话，所以用const
// 2: 通过核心对象创建服务器
const server = http.createServer((request,response)=>{
    // 3: 设置响应的具体行为
    response.end('ok');
});
// 4:监听端口server.listen(端口num,'127.0.0.1',启动后的回调函数)
server.listen(80,()=>{
    console.log('服务器启动了');
});//所以                                                                                                                                                                                                                     