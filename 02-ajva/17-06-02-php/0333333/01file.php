<?php

                 header("Content-Type:text/html;charset=utf-8");
//               1:怎么去接收文件上传的数据 实际上就是去这个数组里面把客户端传递的文件内容一个一个取出来
                 //var_dump($_FILES);
/*     接收到的是文件上传的数据. lifephoto 是文件上传的参数的名称
                 $_FILES=array(
                        "lifephoto"=>
                        array(
                            name=>"", 客户端传递的文件的名称
                            type=>"image/jpeg", 客户端传递的文件类型
                            tmp_name=>"",  客户端传递的文件在服务端临时的一个保存地址
                            error=>"0"  文件上传的时候可能会发生失败，出错误
                            size=>"10823" 客户端上传的 文件的大小
                        )
                 )
*/
//                1.1 获取文件上传的数据
                  $fileName=$_FILES["lifephoto"]["name"];
//                1.2 获取文件上传的时候在服务器端临时的存储位置
                  $tmpaddress=$_FILES["lifephoto"]["tmp_name"];
//                2：接收到文件上传的数据之后，我们怎么去处理这些数据.，实际上要把客户端上传的数据保存在服务端的硬盘上面.
//                2.1 怎么去保存，php 提供了一个函数 move_uploaded_file，可以将文件上传的数据移动到指定的某个目录文件下面
//                  接收两个参数
//                  1:临时的文件存放的地址
//                  2:我要放在的目标位置, images/1.jpg
                  move_uploaded_file($tmpaddress,"images/".$fileName);
//                3：响应数据
                  echo "<font color='green'>恭喜你，文件上传成功</font>";



?>