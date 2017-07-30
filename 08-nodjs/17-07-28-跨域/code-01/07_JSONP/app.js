'use strict';
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/testJsonp')){
        // res.end('var person = ' + JSON.stringify({name:'jack'}));
        // script标签不能直接执行  {name:'jack'}
        // 可以执行 var person = {name:'jack'}
    
        // 后台返回代码让script标签自动执行
        //1:获取回调函数名称 callback=callback_1501225309206
        let callback = url.parse(req.url,true).query.callback;

        //通过函数的调用 + 数据的传递，让script标签自动执行
        //写回callback_1501225309206({name:'jack'})，让浏览器执行
        res.end(callback + '(' + JSON.stringify({name:'jack'}) +')');
    }
});


server.listen(80,()=>{
    console.log('服务器B启动在80端口');
})