(function(angular){
    angular.module('app.jsonp',[])
    this.jsonp = function(url,fn){
        //1:创建script标签
        var script = document.createElement('script');
        //2:动态的回调函数名
        varcallbackName = 'callback_' + Date.name();
        //3:给src赋值
        script.src = url+ '?callback=' + callbackName;
        //4:挂载全局函数
        $window.document.body.appendChild(script);

    }
})(angular)