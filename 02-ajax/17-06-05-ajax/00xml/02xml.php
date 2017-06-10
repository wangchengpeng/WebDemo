<?php

          header("Content-Type:text/xml;charset=utf-8");


          $data=file_get_contents("02xml.xml");

          echo $data;


?>