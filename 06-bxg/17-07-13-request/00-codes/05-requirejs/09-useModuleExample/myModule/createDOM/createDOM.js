define( [ 'jquery' ], function ( $ ) {
  // 一般使用 $ 表示 jquery 的构造函数, 因此回调函数中的参数直接写成 $$

  
// 15-26
  $( '#dv' )
    .append( '<apgn>cookie的键</span><input type="text" name="key"><br/>')
    .append( '<span>cookie的值</span><input type="password" name="value"><br />' )
    .append( '<input type="button" value="保存 cookie " id="save">' );

});