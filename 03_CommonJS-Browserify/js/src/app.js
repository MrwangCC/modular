let module1 = require('./module1');
let {data, test} = module1;
let module2 = require('./module2');
let module3 = require('./module3');
let uniq = require('uniq');
let arr = [1, 1, 1, 3, 2, 4, 5, 5, 5, 2, 4, 6];

console.log(data);
console.log(test);
console.log(module1.data);
module1.test();
module2.fun();
console.log(module3.arr);
console.log(uniq(arr));