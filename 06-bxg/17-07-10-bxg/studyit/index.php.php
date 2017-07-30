<?php

if ( array_key_exists( 'PATH_INFO', $_SERVER ) ) {
  
  $path_info = $_SERVER[ 'PATH_INFO' ];
  if ( $path_info == '/' ) {
    include_once( './htmls/index.html' );
  } else {

    $filename = './htmls' . $path_info . '.html';
    if ( file_exists( $filename ) ) {
      include_once( $filename );
    } else {
      include_once( './htmls/404.html' );
      // include_once( './htmls/index.html' );
    }
  }

} else {

  include_once( './htmls/index.html' );

}





?>