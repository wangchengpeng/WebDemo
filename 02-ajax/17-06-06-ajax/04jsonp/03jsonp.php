<?php

//          //响应的数据.
//                          echo '{"username":"zhangsan"}';

            //这个地方根据callback 名称去获取值，得到的是一个getInfo
            $callback=$_GET["callback"];

            //我给客户端一个响应，因为客户端使用script 标签发送的请求，我必须响应js的语法的代码，客户端解析才不会报错

            //响应给客户端拿到是一个getInfo({"username":"zhangsan"});
            echo $callback.'({"username":"zhangsan"})';







?>