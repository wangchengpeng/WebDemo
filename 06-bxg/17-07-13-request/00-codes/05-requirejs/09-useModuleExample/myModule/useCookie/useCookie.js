
// useCookie, 使用 jquery 和 jquery.cookie 插件
// 获得页面中 #save 按钮, 绑定点击事件, 将 cookie 值保存起来
define( [ 'jquery', 'cookie', 'createDOM' ], function ( $ ) {

  // console.log( $( '#save' ) );

  // 此时依赖于 createDOM 的原因是 必须保证 createDOM 执行完, 页面中 按钮已经被创建出来.
  $( '#save' ).click( function (){
    $.cookie( $( '[name=key]' ).val(), $( '[name=value]' ).val() );
    alert( 'success' );
  });
});