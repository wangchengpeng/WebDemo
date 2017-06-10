<?php

        //告诉客户端浏览器，我这个是json 格式的文本.
        header("Content-Type:text/json;charset=utf-8");


        $data=file_get_contents("person.txt");
        echo $data;

?>