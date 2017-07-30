

// 导入文件处理的 fs
var fs = require( 'fs' );
// 导入 less 转换的 less
var less = require( 'less' );



// 读取当前目录下的所有 less 文件
var rless = /\.less$/;
fs.readdir( './styles/', function ( direrr, files ) {
  if ( direrr ) return;

  // 过滤出来 less 文件
  var  arr = files.filter( function ( filename ) {
    return rless.test( filename );
  });

  console.log( arr );   // [ 'index.less' ]

  arr.forEach( function ( filename ) {   // 读取每一个文件名

    fs.readFile( './styles/' + filename, function ( fileerr, data ) {
      // 读取的结果
      var content = data.toString();

      // 转换
      less.render( content, function ( err, output ) {

        // 转换的结果
        var css = output.css;
        // 获得文件名
        var filenameNoExt = filename.split( '.' ).slice( 0, -1 ).join( '.' );

        // 保存文件
        fs.writeFile( './styles/' + filenameNoExt + '.css', css, function ( err ) {
          if ( err ) return;
          console.log( '转换文件 ' + filenameNoExt + '.css 成功' );
        });

      });
    });

  });
});