


var fs = require('fs');

var rextension = /\.text&/;


//读取文件
fs.readdir('./', function (direrr, files) {
    if (direrr) return;
    files.filter(function (v) {
        return rextension.test(v);
    })
        .forEach(function (filename) {
            fs.readFile(filename, function (fileerr, data) {
                if (fileerr) return;

                console.log(data.toString());
            })
        })
})


// 导入
/*var fs = require( 'fs' );

var rextension = /\.txt$/; 

// 读文件, 先读取当前目录下有哪些 txt 文件
fs.readdir( './', function ( direrr, files ) {
  // 过滤 txt 文件
  if ( direrr ) return;

  files.filter(function ( v ){
    return rextension.test( v );
  })                                            // 留下的都是 txt 结尾的文件
  .forEach( function ( filename ) {
    // 开始读取文件
    fs.readFile( filename, function ( fileerr, data ) {
      // 打印每一个文件的内容
      if ( fileerr ) return;

      console.log( data.toString() );  // 要求打印的时候使用 文件名: 文件内容 的格式


    });
  })
});*/