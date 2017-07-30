
var fs = require( 'fs' );

var less = require( 'less' );


fs.readFile( 'main.less', function ( fileerr, data ){
    var content = data.toString();

    less.render( content, function ( lesser, output ){
        var css = output.css;

        fs.writeFile( 'main.css', css );
    })
})