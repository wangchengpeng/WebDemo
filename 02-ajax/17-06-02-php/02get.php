<?php

        header("Content-Type:text/html;charset=utf-8");
        //接收get 方式提交的数据
        //我们使用 $_GET 的变量去接收客户端以get 方式传递的数据,
        //$_GET php 给我们提供的，整个变量对应的值是一个关联数组
        //var_dump($_GET);
        echo "您的用户名是:".$_GET["username"];
        echo "<br>";
        echo "您的年龄是:".$_GET["age"];
?>