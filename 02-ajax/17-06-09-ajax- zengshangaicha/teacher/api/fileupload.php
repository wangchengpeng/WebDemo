<?php



        $array=$_FILES;
        /*
         array
           'lifePhoto' =>
             array
              'name' => string '618-icon.png' (length=12)
              'type' => string 'image/png' (length=9)
              'tmp_name' => string 'C:\wamp\tmp\phpE362.tmp' (length=23)
              'error' => int 0
              'size' => int 7605
        */
        //移动上传到我硬盘上面的某个位置
        $tmp_name=$array['lifePhoto']['tmp_name'];
        $fileName=$array['lifePhoto']['name'];
        move_uploaded_file($tmp_name,"../images/".$fileName);
        echo "images/".$fileName;
?>