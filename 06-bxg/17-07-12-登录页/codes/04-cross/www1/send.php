<?php


// 访问远程服务器的 文件
// http://www2.com/index.php

$res = file_get_contents('http://www2.com/index.php');

echo $res;

?>