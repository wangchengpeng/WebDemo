### 准备开始
---
#### 学员反馈
请老师保持一个适量的音量，有的时候听不太清楚； 像SPA这样的乍一听很抽象，希望后面有这样得抽象问题可能的话给我们演示个实例，用在哪里。

这一刻 还没有发现不理解的

老师你讲课的时候离话筒进点

老师语速慢一点，谢谢

请问老师你讲得是Angular1.X版本的吧?为什么课程不安排2.0版本,1.X到2.0版本据说变化挺大的的,这个你怎么看???

angular JS 基本结构是什么
 
老师，我也是武汉的耶！老乡哈，多多关照！上来就直接提意见了，老师我觉得你需要给我们时间练一练，我们动手了才知道自己的误区在哪里，要是卡壳了，下面的听课质量就会打折，再多的课程也废了，你说对不对呢，听一天的课，容易犯困的，走神一哈哈，后面不懂了，所以要给时间我们练练，回回神。课程也稍快了些的，没回过神就下一个了，开车快了，都翻沟了去了咋办呢

声音有时很小，老师语速很快

`"{'A':'r','D':'g'}[hero.score]为什么用[]?`

 老师很细心 很认真 谢谢 我想学好 努力加油 刚把得

 无敌

 spa.html单页面应用案例 如果地址栏是 ****#/music 的时候 页面返回的json数据是对应 #/music的 但是 这个时候我点击刷新 页面内容变成了原来写的死的内容 地址没有发生改变 但是内容变了 我再点击 music的时候 因为地址栏没变 所以内容也不会返回music的json内容了 这个希望老师解决一下

 希望老师下午开课前，带大家捋一下上午的知识点。

 `问题1: 大雄老师,明天上课之前再把angular执行顺序和 angular基本机构轻描淡写的讲解一遍,我就懂了, 问题2: 大雄老师,我在 04_ng实现值加一的练习是( <button ng-click="num = num + 1">点击后值加一</button> ) 改为( <button ng-click="num += 1">点击后值加一</button> ),后不能显示了,能说说具体原因吗?单向不能用num += 1 ,双向就可以用了,(这怎么解释呢???) 第一次接触angular, 内心有点阵阵悸动, 还望大雄老师语速尽量慢一点,声音尽量浑厚.孔武有力一点,,这样我就能听得更清楚了,谢谢`

  ng-model="num" ->  angular中 创建num（与页面之间的关系）
  var num = 1;     num += 1;  // num = num + 1;


  未声明变量 直接用变量来运算
  num += 1;  //num = num + 1; 

老师Vue是不是基于angular开发的

上午的语速讲的挺好的，不用降速

就要写懵,就要

点击在内存中修改是怎么回事
  ng-click -> 函数调用 ->  $scope.函数 = fn(){ $scope.xxx = '修改后' }
    在angular中会触发视图的更新，$scope桥梁挂载的属性进行页面更新


#### 复习
* angular操作步骤
  - 1:引包
  - 2:声明管理范围(使用一个模块对象ng-app="app")
  - 3:创建模块对象（老大）
  - 4:创建控制器, -> 给数据与页签的桥梁对象$scope挂载属性（数据）和函数（功能）
  - 4.5:页面中元素使用 （ng-controller="myc"）
* angular执行流程
    - 模块(angular模块化，模块当先)   
      + app1:创建和获取模块的区别，就是第2个参数是否给
      + 参数不给，算获取
      + 给第二个参数数组，创建
    - 模块所创建的对象
      + 通过模块对象创建控制器等对象(老大带小弟)
    - 对象的使用（页面DOM元素使用js对象的功能）
      + 使用这些小弟，前提:先声明老大ng-app="app",当前节点及子节点就可以使用小弟们了
  
* 1：模块(angular模块化，模块当先) 
* 2: 模块所创建的对象
* 3: 对象的使用（页面DOM元素使用js对象的功能）


* 常用指令:
  - ng-app 声明angular模块的管理范围，=什么就是指定那个模块来管理
  - ng-controller 声明控制器的管理范围, 当前元素及子元素,也可以多个控制器
  - ng-init 初始化数据,执行优先级靠前
  - {{xxx}} 插值表达式
  - ng-model 双向数据绑定
    + 1:内存js的改变影响页面的改变
    + 2:页面的改变影响内存的改变
  - ng-class 动态的设置元素的样式
    + 单个 -> ng-class="字符串"
      * 三元 -> 字符串
      * 对象列表根据其key取value -> 字符串
    + 多个 -> 对象
      * 对象 -> 多个以样式做名称的key,值是true
  - ng-repeat -> `ng-repeat="item in arr track by $index"`
  - 相关事件 
    + ng-click
    + ng-change -> 需要你声明ng-model -> 好处方便js部分随时获取其值
* 监视
  - $scope.$watch($scope的属性对象||'$scope属性名',fn(newV,oldV){})
  - $scope.$apply -> 只要当前的操作不属于在angular的执行环境下,就需要手动调用该函数通知angular做视图更新的检查

#### 今日重点
* 控制器中$scope的获取
* 常用指令的使用
* select的使用及form相关使用
* 自定义指令

#### 注册案例
* 用户可用通过表单中的用户名，密码 点击按钮，来注册
  - 如果当前用户名不存在，提示注册成功
  - 如果当前用户名已经存在，提示用户名已经存在
* 数据保存在内存
* 用户名-> username 
* 密码 -> password
* 按钮 -> register函数
* 提示信息 -> msg 
* register函数:  获取username，获取password，判断当前数组中是否用用户数据
  - 然后做出提示,操作msg


### 创建控制器的方式
---

#### 传统方式创建控制器 1星
* 在angular早期版本（1.2.29）
* 将控制器声明成全局函数
* 污染全局变量

#### 面向对象方式创建控制器（认识就可以了） 2星
* 在一些比较喜欢秀技术的人可能会用
* `app.controllr('myc',fn(){ this.xxx=123   })`
* `myc as 任意变量名`
* 输出 `变量名.xxx`

#### 安全方式创建控制器 5星
* `app.controller('myc',['$scope',function($scope){ //具体操作 }])` 
  - 第二个参数数组:  前面不管多少个参数，都是声明你需要的对象名，数组的最后一个元素必须是回调函数，在这个回调函数中，形参对应之前所写的参数顺序
* 字符串数组元素顺序和函数的形参顺序一致
  - `'$scope','$log',function($scope,$log)`
* 总结: 该方式通过将需要的对象名以字符串的方式传递，绕过了js混淆
* 混淆代码 http://tool.oschina.net/jscompress/


#### 依赖注入源码实现
* app.controller('myc',function($scope,$log){});
* 以上这种方式，没有通过new(),没有通过某个函数返回值获取,这种方式叫做依赖注入
* 依赖注入，核心是函数的toString,由此获取到函数的参数名，及顺序，根据名称和顺序匹配传递到函数的调用中
* 传统调用回调函数的形参是根据参数顺序来的，那么如果你需要的是第100个参数，你的形参要写100个，依赖注入直接通过名称来获取，更为简单，一个参数名正确的就可以

### angular常用指令
---
#### 解决闪烁
* 1:先隐藏该元素(自行手写style: 样式名叫做ng-cloak)
* 2:当元素上有class叫做ng-cloak的时候，在angular真正完成显示（数据上来后），就移除其样式 变为display:bloak;

* 通过ng-bind 给元素的innerText赋值，由于已经没有了 {{xxxx}},闪烁就不存在了
* ng-cloak用得会比较多，可以设置更大范围的元素都使用该样式并数据装载后移除隐藏样式

#### ng-if和ng-show
* ng-show
  - 如果值为true 就显示
  - 如果值为false 就隐藏元素 给其加上了ng-hide样式
* ng-if
  - 如果值为true 元素被插入
  - 如果值为false 元素被移除
* 区别
  - ng-show和ng-if  是显示与否和移除与否的区别
    + ng-show 是否显示
    + ng-if 是否插入或删除
* 关于字符串 ""代表false，其他的字符串代表true

### angular常用指令 
  - ng-bind 给元素的innerText赋值，只能是双标签
  - ng-bind-html 只能是双标签,innerHTML
    + 直接放入html是不安全的，需要做如下操作：
      * 1：引包`assets/angular-sanitize/angular-sanitize.js`
      * 2: 声明模块依赖 `angular.module('app',['ngSanitize']);`
  - ng-cloak 披风,
    + 1:先声明一个隐藏的样式，叫做ng-cloak
    + 2:元素上声明class="ng-cloak"
    + 3:angular会在数据更新后将其ng-cloak样式移除
    + 注意: 也可以用ng-cloak指令直接在元素上使用，但是设置其样式的时候，有兼容性问题
  - ng-repeat 遍历数据-> 生成DOM元素结合数据
  - ng-class 可以执行表达式的class 可以接受2种类型数据
    + 单个 ->字符串
    + 多个 -> 对象 {样式1:true,样式2:true}
  - ng-show 显示与否的问题，隐藏时自动添加ng-hide样式
  - ng-hide 显示与否的问题，隐藏时移除ng-hide样式
  - ng-if 移除和插入的问题
  - "" 代表false

### 其他常用指令
- ng-checked: 
- ng-selected：
- ng-disabled：
- ng-readonly: 
 

#### 总结
* angular1中有多少种创建控制器的方式？3
* 安全的方式
* 依赖注入: 依赖注入的好处，避免了按准许来传递参数，如果需要后面参数的麻烦
* 依赖注入核心:函数的toString方法来拿到传递进来的回调函数参数列表
* 常用指令
  - 闪烁: ng-cloak   ng-bind ng-bind-html-> 过滤不安全的数据，需要引包和模块依赖
  - ng-if和show
    + if 是否插入和删除的问题
    + show 是否显示或隐藏的问题
* ng-app
* ng-init ng-controller ng-model ng-repeat ng-class ng-if ng-show ng-hide
* ng-click ng-change ng-submit ng-selected ng-disable ng-checked ng-readonly


### 常用事件指令
- ng-blur：
- ng-focus：
- ng-change: 
- ng-click：
- ng-dblclick：
- ng-submit: 
- 总结: 一般是配合函数的使用

#### select介绍
* <option value="xxx">显示名称</option>   {pinyin:'bj',viewName:'北京'}
* 多个对象，ng遍历 类似for in语法
  - ng-xxx=`ele.viewName for ele in arr`
* 显示名称 ele.viewName
* value ele -> {pinyin:'bj',viewName:'北京'}
* arr数组
* 下拉列表

```html
  value 表示最终选中的这个option的value值
  <select ng-model="value" ng-options="city.viewName for city in citys">
  city.viewName标识要显示在option中的字符串
  city 是option的value，选中后会赋值给select的value

```

#### 二级联动
```javascript
        [{
            "roleName": "软件开发",
            "children": [{
                "roleName": "软件AAA",
                "children": []
            }, {
                "roleName": "软件BBB",
                "children": []
            }, {
                "roleName": "软件CCC",
                "children": []
            }, {
                "roleName": "软件DDD",
                "children": []
            }, {
                "roleName": "软件EEE",
                "children": []
            }, {
                "roleName": "软件FFF",
                "children": []
            }]
        }, {
            "roleName": "硬件开发",
            "children": [{
                "roleName": "硬件AAA",
                "children": []
            }, {
                "roleName": "硬件BBB",
                "children": []
            }, {
                "roleName": "硬件CCC",
                "children": []
            }, {
                "roleName": "硬件DDD",
                "children": []
            }, {
                "roleName": "硬件EEE",
                "children": []
            }, {
                "roleName": "硬件FFF",
                "children": []
            }]
        }, {
            "roleName": "嵌入式开发",
            "children": [{
                "roleName": "嵌入式AAA",
                "children": []
            }, {
                "roleName": "嵌入式BBB",
                "children": []
            }, {
                "roleName": "嵌入式CCC",
                "children": []
            }, {
                "roleName": "嵌入式DDD",
                "children": []
            }, {
                "roleName": "嵌入式EEE",
                "children": []
            }, {
                "roleName": "嵌入式FFF",
                "children": []
            }]
        }];

```


#### 自定义指令
* 在angular中指令就是以ng-开头的东西
* 创建一个指令于创建控制器一样，必须要使用
* app.directive('myDiv',function(){  return options })
* options:
  - 默认通过`<div my-div></div>`
  - 默认通过`<my-div></my-div>`
  - template:'<h1>哈哈</h1>'
* <!-- directive:my-div --> 

* 注意事项: 
  - 1:restrict默认是EA ，也可以是ECMA
    + E:element `<my-div></my-div>`
    + C: class `<div class="my-div"></div>`
    + M: comment `<!-- directive:my-div -->` 要结合replace:true使用
    + A: attribute `<div my-div></div>`
  - template 和templateUrl的区别，templateUrl通过ajax请求文件获取数据
  - replace使用: 当选择是true的时候，模板数据只能包含一个根节点


#### 练习
* 需求：
    -昵称(text) -> 长度6-12位 必填
    - 性别(radio) 必填
    - 出生年月日(select) 必填
    - 兴趣爱好(checkbox) 必填
    - 保存(submit)  


#### 总结