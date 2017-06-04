<?php

            header("Content-Type:text/html;charset=utf-8");
            /*
                1:接收请求
                2:处理请求
                3:完成响应
            */
//            1:接收请求
              $username=$_POST["username"];
              $password=$_POST["password"];
//            2:处理请求 [怎么处理根据实际业务需求决定]
              //模拟一些假数据.
              if($username!="zhangsan" && $password!="123456"){
                    //3:完成响应
                    echo "你有病，快吃药";
              }else{
                    //3:完成响应
                    echo "登录成功，欢迎，欢迎，热烈欢迎";
              }
?>