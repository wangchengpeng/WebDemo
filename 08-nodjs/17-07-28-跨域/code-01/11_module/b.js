'use strict';
// console.log('b.js被加载了');
global.myTest = 'hehe';
// console.log(test);//报错，模块作用域
module.exports = '我是b.js哈哈';