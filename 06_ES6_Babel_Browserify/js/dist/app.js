"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入module2，module2是统一暴露的
console.log(_module.data);
// 引入module3，module3是默认暴露的
/** 
 * 主文件，用于汇总各个模块
 * 在ES6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的
 */
// 引入module1，module1是分别暴露的

(0, _module.demo1)();
(0, _module.test1)();
(0, _module2.demo2)();
(0, _module2.test2)();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();