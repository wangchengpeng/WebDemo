### 准备开始
---
#### 学员反馈
有点模糊 实现效果太快了 希望老师以后提醒一下重点

  不太清楚双击的编辑功能的实现，

 $watch的应用场景 老师这是什么????

 有点跟不上 着急

 在全选和不全选部分，当代码是
 for (var i = 0; i <= $scope.tasks.length-1; i++)
 的时候，默认有两个的时候没有作用，当给他添加多个的时候才有全选和不全选的作用。当代码为for (var i = 0; i < $scope.tasks.length-1; i++)的时候，默认默认有两个的时候还是没有作用，当添加多个的时候，只能是默认的有作用，当正向遍历的时候，应该怎么写呢？

老师，
<input class="toggle-all" type="checkbox" ng-model="toggle" ng-change="toggleAll()"> 

<input class="toggle" type="checkbox" ng-model="task.isCompleted"> 

toggleAll()方法让task.isCompleted跟toggle同为true/false,这个能理解，但为什么task.isCompleted为true/false 时，那绿色的对号就能出来呢，不懂； 第二，老师，根据锚点值改变过滤数据，switch里面什么时候用/#,什么时候用#/,做的这个页面对应的那三个a链接什么时候用/#,什么时候用#/完全不清楚，还有网页的端口是80或者8080分别应该怎么用，我的是8080，所以全混了，a标签的也跟老师不一样，效果出不来，a标签和swith改成跟你的代码一样后，端口号不知道怎么改，还是出不来


    框架中，不管href多复杂，angular包的版本是多少,href="#/xxx 判断的都是/xxx

    


 .filter('myFilter2',function(){ 
    return function(arr){ 
        console.log(arr) var temp = []; 
        for(var i = arr.length - 1; i >= 0; i--){ 
            if(!arr[i].isGood) temp.push(arr[i]) 
        } 
            return temp 
    } 
}) 04_自定义过滤器.html里面这段代码里的console.log(arr)在控制台会打印两次，为什么？
#### 复习

#### 今日重点
* 服务
* ui-router
* $http

#### 服务
* service 回调函数的代码，可以写成构造函数的方式，使用this.xx
* 服务对象在第一次出入的时候完成实例化，
* 全局多次注入仍然只实例化这一个对象,操作公有数据


#### 前端路由和后端路由
* /index.html 立刻跳转页面，发起请求，等待数据响应，浏览器自动渲染
    - /index.html   服务器需要判断，url最后的部分是/index.html||/
    - /login.html   根据判断后的结果响应数据给你

* /index.html#/login 页面不会跳转
    - 但是核心是，锚点值的改变事件会被js所获取
    - 根据配置的锚点值来匹配要显示的数据 
    - 数据通过ajax来获取


#### ui-router
* 单页应用的火爆，ui-router 企业开发中，大部分都是这个玩意
* 基本使用
    - 1:下载包 `npm install angular-ui-router`;
    - 2:引包
    - 3:声明模块依赖 `app.module('xxx',['ui.router'])`
    - 4:配置路由规则
    - 5:留坑

#### ui-router 生成href
* ui-sref写在a标签上，会根据传递的参数，去寻找对应的state，如果存在该state，取其url自动生成href属性值 -> 生
 
#### 路由参数path
* 1:去哪里？  `<a href="#!/home/31231/abc">首页</a>`
* 2:导航 `url:'/home/:val1/:val2' `
* 3:去了干嘛？
    - `$state.params.val1|| val2`

#### 查询字符串
* 1:去哪里？  `<a ui-sref="home" href="#!/home?key1=val&key2=val">首页</a>`
* 2:怎么去(导航)(路由规则) 
    - 查询字符串
        + `state('home',{url:'/home?key1&key2',templateUrl:'./home.html'}) `
* * 3:去了干嘛？
    - 在控制器注入对象，$state
        + 获取路由参数 `$state.params.key1||key2`

#### 参数总结
* 去哪里？  
    - 查询字符串 以#!/home?key1=val1&key2=val2
    - path的方式 以#!/home/val/val2
* 导航
    - 查询字符串 url:'/home?key1&key2'
    - path的方式 url:'/home/:key1/:key2'
* 去了干嘛，都以$state.params.key1||key2获取值

#### ui-sref和直接写href传参的区别
* `href="#!/detail/{{stu.id}}/{{stu.name}}"`
* `ui-sref="detail({prop1:stu.id,prop2:stu.name})" ` 
* 路由规则的配置会影响着ui-sref最终href的生成               
* 查询字符串: `url:'/detail?prop1&prop2' ->  /detail?prop1=1&prop2=2`
* path方式: `url:'/detail/:prop1/:prop2' ->  /detail/1/2`

#### 嵌套路由
* 可以适应多模块的复杂应用-> 单页方式开发多页应用
    - 页面中动态部分嵌套动态部分
* 避免了不改变的数据的重复渲染
* 也能表面代码的重复编写
* 代码编写思路:
    - 1: 外层头 
    -       在ui-view中   
        +       子路由固定的头   
        +       包含ui-view     -》  显示不同的数据
        +       子路由固定的底部 
    -  内层头
    -  2: 声明路由父子关系 父state名.xxx
    -  3: 直接跳入到子路由中去  ui-sref="父state名.xxx"

#### 编程式导航
* `$state.go('state的名称')`

#### 总结重点
* MVC思想5%
* todomvc案例-> 30%
* 路由 -> 50%
* $http -> 10%


#### $http

#### get请求

#### post请求
* $sceDelegateProvider.resourceUrlWhitelist(['', 'self']);

#### 拦截器