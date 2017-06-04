<?php
        header("Content-type: text/html; charset=utf-8");
        /*
        1:接收请求
        2：处理请求
        3：完成响应
        */
        $message=$_POST["message"];
       /* echo $message;
        return;*/
        //随机的给客户端响应一些消息数据.
        $array1=array("你好啊","我好开心啦","你说的什么","what are you 弄撒嘞","您好，很高兴为您的服务");
        //array_rand 方法 ，php 的方法
        //返回当前数组的一个随机的索引值，这个索引值的范围是数组的长度
        $index=array_rand($array1);
        //根据索引响应随机的数据.
        echo  $array1[$index];





?>