// res.download()  
// res.json()   
// res.jsonp()  
// res.redirect()    
// res.send()  
// res.sendFile()  
// res.sendStatus()  

'use strict';
const express = require('express');
//服务器
const app = express();
//创建路由中间件对象
let router = express.Router();

//配置路由规则
router.get('/download',(req,res)=>{
    res.download('./tmp.txt');
})
.get('/json',(req,res)=>{
    res.json({name:'jack'});
})
.get('/jsonp',(req,res)=>{//   /jsonp?callback=test
    res.jsonp('jsonp');
})
.get('/redirect',(req,res)=>{
    res.redirect('http://www.itcast.cn');
})
//可以识别html标签及字符串的解码
.get('/send',(req,res)=>{
    res.send('<span>我是send效果的中文</span>');
})
.get('/sendFile',(req,res)=>{
    res.sendFile(__dirname + '/01_readFile.js');
})
.get('/sendStatus',(req,res)=>{
    res.sendStatus(500);
})



//一定要加入到中间件队列中
app.use(router);


//监听端口开启服务器
app.listen(80,()=>{
    console.log('服务器启动了');
})