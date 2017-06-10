<?php

            //假设我在这里输出的是js 代码，我最好告诉客户端浏览器，我响应给你的是JavaScript
            header("Content-Type:text/javascript;charset=utf-8");
            echo "alert(1)";

?>