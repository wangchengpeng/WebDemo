<?php
    /*
         删除成功
         url:removeTeacher.php
         type:get
         paramter:id
         result:statu:ok
    */

    /*响应的数据类型*/
    header('Content-Type:text/json;charset=utf-8');

    /*建立连接*/
    $con = mysql_connect("127.0.0.1","root","");

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    //操作那个数据库
    mysql_select_db("itcast", $con);

    //根据id 进行删除
    $sql = "DELETE FROM teacher WHERE id = $_GET[id]";

    //把sql 语句通过$con 发送给数据库
    mysql_query($sql,$con);
    //删除成功.
    echo '{"status":"ok"}';
    mysql_close($con);

?>