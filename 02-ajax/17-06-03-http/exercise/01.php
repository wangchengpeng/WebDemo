<?php


      $array1=array(
            array("bookName"="天猫商品免费","author"=>"小邵","price"=>"全部免费","booktype"=>"辣条"),
            array("bookName"="京东商品免费","author"=>"老道","price"=>"零食免费","booktype"=>"卫龙")

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        table {
            width: 600px;
            border-collapse: collapse;
        }

        td {
            height: 40px;
            text-align: center;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
<input type="button" value="查询">
<table>
    <tr>
        <td>书面</td>
        <td>作者</td>
        <td>价格</td>
        <td>类型</td>
    </tr>
    <!--在这里输出-->
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <div>

    </div>


</table>


</body>
</html>