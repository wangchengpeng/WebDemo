<?php


       header("Content-Type:text/json;charset=utf-8");

       $data=file_get_contents("person.txt");
       echo $data;

?>