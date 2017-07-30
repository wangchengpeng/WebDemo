'use strict';
// * argv 获取命令行参数，可以用来做命令行工具的开发,参数中间以空格分隔
// * env 获取当前系统环境变量 

// console.log(process.argv);//返回的是命令行上所有参数的数组
// node  ./xx.js 1 2 3
// arr[0]="node" arr[1]="文件" arr[2]="1".....

//实现一个自己控制台的加法计算器，
//用户使用  node xx.js 5 + 8 回车  输出13
//           0    1    2 3 4

//文档: 用户使用  node xx.js 5 + 8 回车  输出13
//获取两个参数
// let num1 = process.argv[2] - 0;
// let num2 = process.argv[4] - 0;
// console.log('您好，计算结果是：'+ (num2 + num1));
// 

console.log(process.env.MONGO); //返回值是一个对象
if(process.env.MONGO === 'D:\\dev\\MongoDB\\Server\\3.2\\bin'){
    console.log('这是凃老师的电脑')
}else{
    console.log('同学，你好！');
}