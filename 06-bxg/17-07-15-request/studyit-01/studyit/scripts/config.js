
// 定义配置
(function () {

require.config({
  // 此时是在 http://www.studyit.com 网站下, 所以系统根目录为 studyit
  baseUrl: '/',

  paths: {
    // 第三方库
    jquery: 'libs/jquery-3.2.0/jquery-3.2.0',
    cookie: 'libs/jquery-cookie-master/src/jquery.cookie',
    template: 'libs/art-template-master/lib/template-web',



    // 自定义库
    common: 'scripts/common',
    login: 'scripts/login'
  }


});


// 首先加载通用模块
require( [ 'common' ] );

})();