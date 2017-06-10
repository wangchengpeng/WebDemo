<?php

        //告诉客户端浏览器，我响应的是一个xml 格式的数据.
        header("Content-Type:text/xml;charset=utf-8");


        //1:怎么去响应xml 格式的数据
        echo "<?xml version='1.0' encoding='utf-8' ?><persons><person name='zhangsan'></person></persons>";

?>