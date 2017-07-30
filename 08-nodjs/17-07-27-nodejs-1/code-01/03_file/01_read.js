'use strict';
const fs = require('fs'); //核心对象直接require,不用下载

//读取文件内容 fs.readFile(path,[,..编码str],callback)
// fs.readFile('../../readme.md',(err,data)=>{
//     if(err) throw err; //这个err你需要处理，不然会手足无措
//     console.log(data);
// });
//同步读取
// try{
//     let text = fs.readFileSync('../../readme.md1','utf8');
//     console.log(text);
// }catch(err){
//     console.log(err);
// }
//回调函数错误对象优先

//写文件,在nodejs中，默认的编码就是utf8,默认是清空了再写
// fs.writeFile('./tmp.txt','我又中了500万',{ flag:'a'},(err)=>{
//     if(err) throw err;
//     console.log('文件写入成功');
// });
//同步写
// try{
//     fs.writeFileSync('./tmp.txt','我又中了1000万',{ flag:'a'});
//     console.log('文件写入成功');
// }catch(err){
//     throw err;
// }

//复制文件
// fs.readFile('./tmp.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     fs.writeFile('./tmp2.txt',data,(err)=>{
//         if(err) throw err;
//         console.log('复制成功');
//     });
// });
// 


fs.readFile('./a.txt',(err,data)=>{
    if(err) throw err; //这个err你需要处理，不然会手足无措
    console.log(data);
});