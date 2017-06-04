<?php

                    header("Content-Type:text/html;charset=utf-8");
                        //1：接收请求
                    $tel=$_POST["telephone"];
                    //2:处理请求
                    //如果说真是的业务开发，把这个手机号拿到数据库里面查询一下。
                    $array1=array("13620934111","13800000001","13800000002","13800000003","13800000009");
                    //3:完成响应
                    if(in_array($tel,$array1)){
                            echo "<font color='red'>该账号已经被注册了哦，亲</font>";
                    }else{
                            echo "<font color='green'>恭喜您，该账号可以使用.</font>";
                    }



?>