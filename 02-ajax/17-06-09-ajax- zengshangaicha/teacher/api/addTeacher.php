<?php
            /*
              接口描述: 添加讲师的接口
                    url:addTeacher.php 地址
                    type:"post", 提交方式
                    parameter:参数
                        username: 讲师的名称
                        telephone：手机号
                        age:年龄
                        desc：描述
                        lifephoto：讲师的照片的地址
                    result:
                         {"statu":"ok"} //响应的成功.
            */
            /*
               响应的数据
            */
            header('Content-Type:text/json;charset=utf-8');
            /*
                连接数据库
                账号，密码
            */
            $con = mysql_connect("127.0.0.1","root","");
            if (!$con){
                die('Could not connect: ' . mysql_error());
            }
            //连接那个数据
            mysql_select_db("itcast", $con);

            //sql 语句
            //把客户端获取到的值，往数据库里面添加
            $sql="INSERT INTO teacher (username, telephone, age,t_desc,lifephoto)
            VALUES
            ('$_POST[username]','$_POST[telephone]','$_POST[age]','$_POST[desc]','$_POST[lifephoto]')";


            if (!mysql_query($sql,$con)){
                die('Error: ' . mysql_error());
            }
            //添加成功
            echo '{"status":"ok"}';
            //关闭跟数据库的连接
            mysql_close($con)

?>