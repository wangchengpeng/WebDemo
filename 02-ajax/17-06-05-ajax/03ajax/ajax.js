//一般我们都是以面向对象的方式去组织页面上面的代码
//将方法，以及属性包在一个对象里面.
var $={
    ajax:function(obj){
        var xhr=new XMLHttpRequest();
        //进行一个处理，用户可能get 方式提交，也可能post方式提交.
        //要让type 的提交方式支持大小写
        obj.type=obj.type.toLocaleLowerCase();  //将一个字符串转换为小写.
        if(obj.type=="get"){
            obj.url=obj.url+"?"+obj.data;
            obj.data=null;
        }
        xhr.open(obj.type,obj.url);
        //如果是post 方式提交，需要设置一个请求头
        if(obj.type=="post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        xhr.send(obj.data);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                var data=xhr.responseText;
                //请求的数据完成以及成功的时候调用.
                obj.success(data);
            }
        }
    }
};