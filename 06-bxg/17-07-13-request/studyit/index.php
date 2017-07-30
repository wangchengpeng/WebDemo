<?php

// 用于实现路由的功能

// 描述:
// 输入的 url 为
// http://www.studyit.com/index.php/index
// 只需要获得 PATH_INFO 即可

// 但是如果用户输入的是 
// http://www.studyit.com
// 默认显示 index 主页

// 如果遇到了不记得的或不会的方法, 如果需要查询, 可以考虑
// 1> 语言 另一个语言的方法名
// 2> 描述文字

// 判断数组中是否包含 xx 属性
// PHP indexOf

// 根据搜索, 发现有一个函数 array_key_exists( '属性名', 数组 ) 
// 用于判断数组中是否含有该属性

// $_SERVER
if ( array_key_exists( 'PATH_INFO', $_SERVER ) ) {
  
  // 有 path info
  $path_info = $_SERVER[ 'PATH_INFO' ];
  // 解析它, 看是不是 /, 还是 /名字, 还是 /文件夹/名字
  if ( $path_info == '/' ) {
    // 显示主页
    include_once( './htmls/index.html' );
  } else {

    // 如果   /index, 
    // include_once( './htmls' . $path_info . '.html' );
    // 如果   /teacher/list
    // include_once( './htmls' . $path_info . '.html' );

    // 看看这个文件存不存在, 如果存在则访问, 如果不存在则显示 404
    $filename = './htmls' . $path_info . '.html';
    if ( file_exists( $filename ) ) {
      include_once( $filename );
    } else {
      //echo '不存在 404 找不到页面';
      include_once( './htmls/404.html' );
    }
  }


} else {

  // 没有 path info
  // 显示首页
  include_once( './htmls/index.html' );

}





?>