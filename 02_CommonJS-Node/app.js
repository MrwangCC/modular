/** 
 * 汇总的文件
 * 注意：引入模块时：
 *  1. 如果引入的是第三方模块，则直接写上模块名
 *  2. 如果引入的是自定义模块，必须写路径
 */
let module1 = require('./modules/module1');
let {data, test} = module1;
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let uniq = require('uniq');
let arr = [1, 1, 2, 3, 3, 4, 4, 4, 4, 5];

//如何使用一个模块取决于：模块暴露的是什么。
console.log(data);
console.log(test);
console.log(module1.data);
module1.test()
module2.haha()
console.log(module3.peiqi);
module3();
console.log(uniq(arr));

//console.log(require('./modules/module1').data)
//验证内置关系

console.log(module.exports === exports);
console.log(module.exports);
console.log(exports);
//console.log(require)