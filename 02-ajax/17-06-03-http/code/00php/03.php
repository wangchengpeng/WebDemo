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
    </table>
    <?php for($i=1;$i<=1000;$i++){?>
            <div>
                    <?php echo $i; ?>
            </div>
    <?php }?>




</body>
</html>