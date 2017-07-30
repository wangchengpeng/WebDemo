'use strict';
const http = require('http');
const fs = require('fs');
// 引入url 核心对象
const url = require('url');


//1: 返回index.html
//2: 配置对应登录接口处理

//创建服务器对象
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            res.end(data); //data 就是文件数据
        })
        //  /login.php?
    } else if (req.url.startsWith('/login.php')) {
        let user = url.parse(req.url, true).query;
        if (user.username === '111' && user.password === '222') {
            fs.readFile('./success.html', (err, data) => {
                res.end(data);
            })
        } else {
            fs.readFile('./err.html', (err, data) => {
                res.end(data);
            })
        }
    }
})

server.listen(80, () => {
    console.log('服务器启动了');
})