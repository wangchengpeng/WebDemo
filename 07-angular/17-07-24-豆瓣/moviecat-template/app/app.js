(function(angular) {

    //配置路由规则，/home，手动能够看到首页，在config中完成
    angular.module('app', ['ui.router', 'app.jsonp'])
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: './views/home.html'
                })
                //正在热映
                .state('in_theaters', {
                    url: '/in_theaters',
                    templateUrl: './views/in_theaters.html',
                    //对路由设置控制器
                    controller: ['$scope', '$http','jsonpService', function($scope, $http,jsonpService) {
                        //初始化电影列表
                        $scope.movies = [];
                        //$scope.text = '哈哈';

                        // jsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',function(data){
                        //     console.log('正在热映的逻辑代码')
                        //     console.log(data);
                        // });
                        //  jsonpService.jsonp('https://api.douban.com/v2/movie/top250',function(data){
                        //     console.log('top250的逻辑代码')
                        //     console.log(data);
                        // })

                        $http.get('./intheaters_data.js')
                        .then(function(res){
                            $scope.movies = res.data.subjects;
                            //console.log(res);
                        })



                    }] //使用
                })
        }])
    // .controller('in_theaters_controller',['$scope',function($scope){
    //     $scope.text='哈哈';
    // }])


})(angular);