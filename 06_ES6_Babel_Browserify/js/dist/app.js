"use strict";

var _module = require("./module1");

var haha = _interopRequireWildcard(_module);

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 引入module2，module2是统一暴露的(module2里面给暴露的内容起了别名)
console.log(haha);
// import {
//     HH1,
//     HH2
// } from "./module2";

// 引入module3，module3是默认暴露的
/** 
 * 主文件，用于汇总各个模块
 * 在ES6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的
 */
// 引入module1，module1是分别暴露的
// import {
//     data,
//     demo1,
//     test1
// } from "./module1";

// 引入module1，module1是分别暴露的(此种模式会将module暴露的内容，收集成一个对象)

console.log(haha.data);
haha.demo1();
haha.test1();
(0, _module2.demo2)();
(0, _module2.test2)();
// HH1();
// HH2();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();