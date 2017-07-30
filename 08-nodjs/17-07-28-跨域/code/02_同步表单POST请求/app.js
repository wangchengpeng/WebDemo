'use strict';
const http = require('http');
const fs = require('fs');
//引入url核心对象
const url = require('url');
//引入querystring核心对象
const querystring = require('querystring');

//1:返回index.html
//2:配置对应登录接口处理


//创建服务器对象
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            res.end(data); //data就是文件数据
        })
        //   /login.php?
    } else if (req.url.startsWith('/login.php')) {

        //请求体数据
        req.on('data', (data) => { //Buffer对象可以使用.toString()转换字符串
            let user = querystring.parse(data.toString());
            if (user.username === '111' && user.password === '222') {
                fs.readFile('./success.html', (err, data) => {
                    if (err) throw err;
                    res.end(data); //data就是文件数据
                })
            }else{
                    fs.readFile('./err.html',(err,data)=>{
                        if(err) throw err;
                        res.end(data); //data就是文件数据
                    })
            }
        });
        //res.end('aa');
    }
});


server.listen(80, () => {
    console.log('服务器启动了');
});