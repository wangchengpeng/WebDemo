

// 导入文件处理的 fs
var fs = require( 'fs' );
// 导入 less 转换的 less
var less = require( 'less' );


// 读取 main.less
fs.readFile( 'main.less', function ( fileerr, data ) {
  var content = data.toString();

  less.render( content, function ( lesserr, output ) {

    // 转好的结果
    var css = output.css;


    // 保存到 main.css 中
    fs.writeFile( 'main.css', css );

  });

});
