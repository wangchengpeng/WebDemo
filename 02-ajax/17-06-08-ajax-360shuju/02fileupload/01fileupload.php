<?php


            /*
               1：接收请求
                $_FILES
                   array
                      'lifephone' =>
                        array
                          'name' => string '5.jpg' (length=5)
                          'type' => string 'image/jpeg' (length=10)
                          'tmp_name' => string 'C:\wamp\tmp\php59D5.tmp' (length=23)
                          'error' => int 0
                          'size' => int 91572
               2：处理请求
               3：完成响应
            */
//             1：接收请求
                $fileName=$_FILES["lifephone"]["name"]; //获取到客户端文件上传的名称
                $tmpaddress=$_FILES["lifephone"]["tmp_name"]; //获取到存在服务端的临时的地址
//             2：处理请求 [移动到硬盘的某个位置]
                $address="images/".$fileName;
                move_uploaded_file($tmpaddress,$address);
//             3：完成响应

               echo  $address;





?>