<?php
        header("Content-Type:text/html;charset=utf-8");
        //1:给一个响应头
        header("Refresh:5;url=http://www.baidu.com");
        //2：给文字提示.
        echo " <span>5</span> 秒钟之后会自动跳转页面，如果没有跳转，请点击<a href='http://www.baidu.com'>这里</a>";
?>
<script>


                var i=5;
                var ids=window.setInterval(function(){
                        i--;
                        if(i==0){
                                window.clearInterval(ids);
                                return;
                        }
                        document.querySelector("span").innerHTML=i;
                },1000);

</script>
