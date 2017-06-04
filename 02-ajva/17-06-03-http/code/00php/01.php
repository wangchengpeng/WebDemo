<?php

        //写在php 尖括号外面的代码，服务器不会解析，不会转换的
        //到时候在客户端运行的
        //还需要再这个php 代码里面进行操作.

        //假设访问我的这个php 文件,php 尖括号里面代码会运行

        //取出来的数据肯定是在一个数组当中
        $array1=array(
               array("bookName"=>"独孤求败","author"=>"杨耀","price"=>"十块三斤","booktype"=>"武侠"),
               array("bookName"=>"东方不败","author"=>"冯冀","price"=>"十块一斤","booktype"=>"武侠")
        );
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        table {
            width: 600px;
            border-collapse: collapse;
        }
        td {
            height: 40px;
            text-align: center;
            border: 1px solid #CCC;
        }
    </style>
</head>
<body>
<input type="button" value="查询">
    <table>
            <tr>
                <td>书名</td>
                <td>作者</td>
                <td>价格</td>
                <td>类型</td>
            </tr>
            <!--我是希望在这个地方进行输出的-->
            <?php
                  for($i=0;$i<count($array1);$i++){
                        echo "<tr>";
                        echo "<td>".$array1[$i]["bookName"]."</td>";
                        echo "<td >".$array1[$i]["author"]."</td>";
                        echo "<td>".$array1[$i]["price"]."</td>";
                        echo "<td>".$array1[$i]["booktype"]."</td>";
                        echo "</tr>";
                  }
            ?>
    </table>
    <div>

    </div>
</body>
</html>