(function(angular){

    //配置路由规则,/home,手动购看到首页, 在config中完成
    angular.module('app',['ui.router'])
    .config(['$stateProvider',function($stateProvider){
        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'./views/home.html'
        })
        .stat('in_theaters',{
            url:'/in_theaters',
            controller:['$scope','$heep','jsonpService',function($sscope,$http,jsonpService){
                jsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',function(data){
                    console.log('正在热映的路基代码')
                    console.log(data);
                });
                jsonpService.jsonp('https://api.douban.com/v2/movie/top250',function(data){
                    console.log('top250的逻辑代码')
                    console.log(data);
                })
                
            }]
        })
    }])
})(angular);