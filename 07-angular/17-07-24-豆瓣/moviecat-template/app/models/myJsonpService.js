(function(angular){
    angular.module('app.jsonp',[])
    .service('jsonpService',['$window',function($window){
            
        this.jsonp = function(url,fn){
            //1:创建script标签
            var script = document.createElement('script');
            //2:动态的回调函数名
            var callbackName = 'callback_' + Date.now();
            //3:给src赋值
            script.src= url + '?callback=' + callbackName; 
            //4:挂载全局函数
            $window[callbackName] = fn;
            //5:将标签插入到文档
            $window.document.body.appendChild(script);

        }


    }])
})(angular);