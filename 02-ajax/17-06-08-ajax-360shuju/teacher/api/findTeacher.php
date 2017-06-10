<?php



    //给客户端一个响应头，响应json 格式的数据.
    header('Content-Type:application/json;charset=utf-8');

    //连接数据库 得到连接
    $con = mysql_connect("127.0.0.1","root","");
    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    //连接那个数据库  itcast 数据
    mysql_select_db("itcast", $con);

    //get 方式提交. 当前页码  2
    $pageNum = $_GET['pageNum'];

    //每页显示多少条.
    $pageSize = $_GET['pageSize'];  //10
    $start=($pageNum-1)*$pageSize;
    $sql="select *,(select count(*) from teacher) as total from teacher order by id desc limit $start , $pageSize ";
    //调用mysql_query 返回结果.
    $result = mysql_query($sql);
    //定义了一个空数组.
    $list = array();
    $total = 0;
   //把数据库里面返回的结果$result 遍历出来
   //放在$list 空的数据里面.
    while($row = mysql_fetch_array($result)){
        $item = array(
            'id' => $row['id'],
            'username' => $row['username'],
            'telephone' => $row['telephone'],
            'age' => $row['age'],
            'desc' => $row['desc'],
            'lifephoto' => $row['lifephoto'],
        );
        //往数组里面添加一条记录.
        array_push($list,$item);
        //总记录数
        $total = $row['total'];
    }


    /*把数组里面的数据转换成json 格式，向客户端输出.*/
    echo json_encode(
        array(
            'rows'=>$list,
            'pageSize'=>intval($pageSize),
            'pageNum'=>intval($pageNum),
            'total'=> intval($total)
        )
    );
    mysql_close($con);
    usleep(300000);
?>