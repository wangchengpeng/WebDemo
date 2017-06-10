var $={
    //新增的函数，函数的功能，将一个对象转换成字符串
    params:function(obj){
        //将对象的key 作为参数名，key 对应的值作为参数值。这个地方怎么编写逻辑.
        var str="";
        //username=zhangsan&age=11&sex=nan
        for(var key in obj){
            str+=key+"="+obj[key]+"&";
        }
        //组装的字符串多了一个&,截取之后返回一个新的字符串
        str=str.substr(0,str.length-1);
        return str;//出来是要发送到后台的数据，参数名，参数值.
    },
    ajax:function(obj){
        //1:创建对象
        var xhr=new XMLHttpRequest();
        //新增功能1:我要处理，这个data 对应的值支持是一个对象
        //将 对象={username:"zhangsan",age:11,sex:"nan"}  转换成 字符串的格式  username=zhangsan&age=11&sex=nan

        //新增功能4：请求发送之前调用. 如果该函数return false ，我就组织改代码继续往下执行.
        //console.log(obj.beforeSend);
        if(obj.beforeSend){ //因为用户在调用的时候，可能没有传递,所以需要进行判断.
            var flag=obj.beforeSend();
            if(flag==false){
                return;
            }
        }
        //对obj.data 的类型进行判断，如果是对象类型，我才去进行处理.
        if(typeof obj.data=="object"){
            //在这里进行处理
            //提炼一个方法，参数是obj={} 出来的字符串username=zhangsan&age=11&sex=nan
            //this 现在指向到 $
            obj.data=this.params(obj.data);
        }
        //2:打开对象
        //注意：如果是get 方式提交，参数在地址的后面
        if(obj.type.toLowerCase()=="get"){
            obj.url=obj.url+"?"+obj.data;
            obj.data=null;
        }
        xhr.open(obj.type,obj.url);
        //注意：处理post 我们需要给一个请求头
        if(obj.type.toLowerCase()=="post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        //3:发送数据
        xhr.send(obj.data);
        //4:接收数据
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){  //响应完成
                if(xhr.status==200){ //响应成功
                    var data=xhr.responseText;
                    obj.success(data);
                }else{
                    //失败的时候去调用error
                    //新增功能2
                    //等价于
                   /* if(obj.error){
                        obj.error();
                    }*/
                    obj.error && obj.error();

                }
                //新增功能3
                //请求完成的时候调用
                // if(obj.complete){
                //     obj.complete();
                // }
                    obj.complete && obj.complete();

            }
        }
    }
}