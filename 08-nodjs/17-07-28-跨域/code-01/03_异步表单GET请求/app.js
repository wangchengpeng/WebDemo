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
    } else if (req.url.startsWith('/login')) {
        let user = url.parse(req.url, true).query;
        if (user.username === '111' && user.password === '222') {
            let responseObj = {
                code: '001',
                msg: '登录成功'
            }
            //First argument must be a string or Buffer
            res.end(JSON.stringify(responseObj));
        } else {
            let responseObj = {
                code: '002',
                msg: '用户名或密码不正确'
            }
            res.end(JSON.stringify(responseObj));
        }

    }
});


server.listen(80, () => {
    console.log('服务器启动了');
});