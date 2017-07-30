require.config({
  baseUrl: '/06-bxg/17-07-13-request/00-codes/05-requirejs/09-useModuleExample/',
  paths: {
    // 第三方的 库
    jquery: 'js/jquery-3.2.0',
 
    cookie: 'js/jquery.cookie',

    // 自定义的 js
    createDOM: 'myModule/createDOM/createDOM',
    useCookie: 'myModule/useCookie/useCookie'
  }
});


// 加载模块
require( [ 'useCookie' ],[ 'createDOM' ] );
