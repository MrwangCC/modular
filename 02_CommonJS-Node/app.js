/** 
 * 汇总的文件
 */
let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let uniq = require('uniq');

//如何使用一个模块取决于：模块暴露的是什么。
console.log(module1.data);
module1.test()
module2.haha()
console.log(module3.peiqi);
console.log(uniq([1, 3, 2, 5, 4, 3, 6, 7, 11, 10, 9, 8]));
//console.log(require('./modules/module1').data)
//验证内置关系
/*
console.log(module.exports === exports)
console.log(module.exports)
console.log(exports)*/
//console.log(require)