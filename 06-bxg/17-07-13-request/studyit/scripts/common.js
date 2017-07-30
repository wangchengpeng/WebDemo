
// 着手让页面跳转到 登录页面
(function () {
	// location.href = 'http://www.studyit.com/index.php/login';

	// location.pathname = '/index.php/login';

	// console.log( location.pathname );

	// if ( location.pathname != '/index.php/login' ) {
	// 	location.pathname = '/index.php/login';
	// }

	// 使用正则实现
	// if ( 登录成功 ) {
	// ...
	// } else {
	// var rlogin = /\/login$/;
	// if ( !rlogin.test( location.pathname ) ) {
	// 	location.pathname = '/index.php/login';
	// }
	// }

	// 如果没有登录 才要跳转到 登录页面
	// 引入 jquery.cookie
	var phpsessid = $.cookie( 'PHPSESSID' );

	if ( !phpsessid ) {
		// 没有该数据
		var rlogin = /\/login$/;
		if ( !rlogin.test( location.pathname ) ) {
			location.pathname = '/index.php/login';
		}
	} else {

		
		// 读取 cookie 加到页面中
		// console.log( '--- cookie ----' );
		// console.log( $.cookie() );

		// 取出 userInfo
		var userInfo = JSON.parse( $.cookie( 'userInfo' ) || '{}' );

		// 将 userInfo 取出来渲染页面
		$( '.profile img' ).attr( 'src', userInfo.tc_avatar );
		$( '.profile h4' ).html( userInfo.tc_name );

	}
})();