// 1:我是80端口，返回index.html （服务器接受请求）
// 2:接受index.html中的ajax请求，然后请求别人，并响应回去（创建客户端）
'use strict';
const http = require('http');
const fs = require('fs');
const options = {
    protocal:'http',
    host:'www.baidu.com',
    port:80,
    path:'/', //path就是我们req.url
}
          
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err) throw err;
            res.end(data); //响应首页
        })
    }else if(req.url === '/testProxy'){
        //转发
        //创建一个客户端对象
        let client = http.request(options,(res2)=>{
            //获取请求体数据的方式来获取响应体数据
            res2.on('data',(data)=>{
                //百度来的响应
                // console.log(data.toString());
                res.end(data);
            })
        });

        //发起请求
        client.end();


    }
});

server.listen(80,()=>{
    console.log('代理服务器启动了');
})
