(function () {

// 自己定义的 库 的代码
var obj = {
  name: 'jim',
  age: 19,
  gender: '男'
};

// ...
// ...

// 如果系统支持 require.js 那么就应该使用 define
// 如果系统不支持就使用 window.obj = obj

if ( typeof define == 'function' && define.amd ) {
  // 引入了 require.js
  define( function () {
    return obj;
  });
} else {
  // 没有引入 require.js
  window.obj = obj;
}

})();