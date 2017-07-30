var less = require('less');

less.render('.cl; a; s; s  width:(1 + 1 }',function (e, output){
    if( !e ){
        console.log( output.css );
    }
})