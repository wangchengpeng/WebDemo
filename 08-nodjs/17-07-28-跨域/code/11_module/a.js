'use strict';
//测试全局变量
global.myTest = 'haha';

// var test = 'haha';
// console.log('加载b.js以前');
let b = require('./b.js'); //加载b.js文件，会阻塞后续代码执行，同步的
// console.log('加载b.js以后');
console.log(b);

console.log(global.myTest);

//commonJS的模块定义中，一个文件，就是一个模块，一个模块可以require一个模块，
//一个模块也可以module.exports向外导出一个数据