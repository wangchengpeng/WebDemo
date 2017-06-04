<?php

        //解决乱码，给客户端一个响应头
        header("Content-Type:text/html;charset=utf-8");
        //1:获取请求头 获取所有的请求头.
          $arrHeader=getallheaders();
        //2:我获取的是User-Agent 请求头对应的值
          $headeValue=$arrHeader["User-Agent"];
         // echo $headeValue;
        //3:php 里面有一个函数 strstr() 判断字符串是否包含指定的字符串.
        if(strstr($headeValue,"Chrome")){
             echo "您当前使用的google 浏览器，棒棒哒!";
        }else if(strstr($headeValue," Firefox")){
             echo "您当前使用的火狐 浏览器，双击666";
        }else if(strstr($headeValue,"MSIE")){
             echo "您当前使用的浏览器版本较低，请<a href='http://www.360.com'>升级</a>";
        }
?>