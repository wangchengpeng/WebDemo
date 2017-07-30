'use strict';
const http = require('http');
const fs = require('fs');
//引入url核心对象
const url = require('url');
//引入querystring核心对象
const querystring = require('querystring');
//引入art-template对象
const artTemplate = require('art-template');

let heros = [{
    id:1,name:'李白'
},{
    id:2,name:'貂蝉'
},{
    id:3,name:'吕布'
}];

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
                
                let htmlText = artTemplate(__dirname + '/list.html',{
                    heros:heros
                });

                // console.log(htmlText);
                res.end(htmlText);


            }else{
                    fs.readFile('./err.html',(err,data)=>{
                        if(err) throw err;
                        res.end(data); //data就是文件数据
                    })
            }
        });
        //res.end('aa');
    }else if(req.url.startsWith('/detail')){
        console.log(req.url);
        //http://127.0.0.1/login.php || undefined
        // console.log(req.headers.referer); 
        if(req.headers.referer == undefined){
            //让其去登录
            //重定向: 你找的借钱，我没有，我让你去找他借
            //当浏览器接受到响应状态码是30x,就会根据给定的响应头，location自定去发起请求
            //302 found to
            res.writeHead(302,{
               'location':'http://127.0.0.1/' 
            });
        }


        if(req.url.includes('?')){
            //1:如果是查询字符串的话
            let id = url.parse(req.url,true).query.id;
            //查找英雄
            let hero = heros.find((ele,index)=>{
                return ele.id == id;
            });
            //html字符串
            let htmlText = artTemplate(__dirname + '/detail.html',{
                hero:hero
            });
            //响应html字符串
            res.end(htmlText);
        }else{

            //  /detail/2
            let regex = /\/.*\/(.*)/; //分组可以获取值
            // console.log(regex.exec(req.url)); //获取数组1就是匹配的第一个分组数据，数组的第一个元素是匹配字符串
            let id = regex.exec(req.url)[1];
            let hero = heros.find((ele,index)=>{
                return ele.id == id;
            });
            //html字符串
            let htmlText = artTemplate(__dirname + '/detail.html',{
                hero:hero
            });
            //响应html字符串
            res.end(htmlText);
            

        }
    }
});


server.listen(80, () => {
    console.log('服务器启动了');
});