
define( [ 'jquery', 'cookie' ], function ( $ ) {

  // 进行登录操作
  $( '#loginForm' ).on( 'submit', function () {

      // 发送 ajax 请求
      $.ajax({
          url: '/api/login',
          type: 'post',
          data: $( this ).serialize(),
          success: function ( info ) {
              if ( info.code == 200 ) {
                  // 表示登录成功
                  alert( '登录成功' );

                  // 将用户的数据存储到 cookie 中
                  $.cookie( 'userInfo', JSON.stringify( info.result ), { path: '/', expires: 1 } );

                  location.pathname = '/';
                  // console.log( info );
              }
          }
      })

      return false;
  } );


});