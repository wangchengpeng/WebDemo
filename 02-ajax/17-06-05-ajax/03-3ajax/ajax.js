//一般我们都是以面向对象的方式去组织页面上面的代码
//将方法，以及属性包在一个对象里面.
var $ = {
    ajax: function (obj) {
        var xhr = new XMLHttpRequest();

        //判断get 还是 post方式提交
        obj.type = obj.type.toLocaleLowerCase();   //将一个字符串转换为小写
        if (obj.typt == "get") {
            obj.url = obj.url + "?" + obj.data;
            obj.data = null;
        }
        xhr.open(obj.tyle, obj.url);
        if (obj.tyle == "post") {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        xhr.send(obj.datea);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = xhr.responseText;
                obj.success(data);
            }
        }
    }
};