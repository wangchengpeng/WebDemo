// 此处的写法就不是使用 模块的语法了
// 需要使用一个 沙箱( 自调用函数 )
(function () {

require.config({
  baseUrl: '/20170713-bxg/codes/05-requirejs/08-useOtherModule/',
});


// 默认加载 moduleB
require( [ 'moduleB' ] );

})();