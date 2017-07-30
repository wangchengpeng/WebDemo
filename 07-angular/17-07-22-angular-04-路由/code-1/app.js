'use strict';
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
        if (req.url.startsWith('/testJsonp')) {
            //获取callback名称
            let callbackName = url.parse(req.url, true).query.callback;

            //返回数据，script -> 不能返回对象  !callback('dasdas')
            let backStr = '!' + callbackName + '(' + '{name:"abc"}' + ')';
            console.log(backStr);
            res.end(backStr);
        }
    })
    .listen(80)


/// 浏览器响应 !callback_1496731814640({name:"abc"})
/// backStr    !callback_1496731814640({name:"abc"})
