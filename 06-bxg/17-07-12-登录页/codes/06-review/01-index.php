<?php


sleep( 15 );

$callback = $_GET[ 'callback' ];

echo $callback . "( '10\'s after' )";   
?>