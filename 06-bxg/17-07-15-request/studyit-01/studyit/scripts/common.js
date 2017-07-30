
define( [ 'jquery', 'template', 'cookie' ], function ( $, template ) {



	// 引入 jquery.cookie
	var phpsessid = $.cookie( 'PHPSESSID' );

	if ( !phpsessid ) {
		// 没有该数据
		var rlogin = /\/login$/;
		if ( !rlogin.test( location.pathname ) ) {
			// location.pathname = '/index.php/login';
		}
	} else {

		
		// 取出 userInfo
		var userInfo = JSON.parse( $.cookie( 'userInfo' ) || '{}' );

		// 使用模板引擎 修改用户的头像与名字
		var profileTpl = 
										'<div class="avatar img-circle">' +
										'<img src="{{ tc_avatar }}">' +
										'</div>' +
										'<h4>{{ tc_name }}</h4>';
		// 使用 template.complie -> func
		var render = template.compile( profileTpl );
		// 调用返回的函数, 传入填充模板的对象即可生成渲染后的 html 格式的字符串
		var html = render( userInfo ); // 返回的是字符串

		$( '.aside .profile' ).html( html ); // 将生成的 html 字符串直接赋值给 profile 标签
	}



});

