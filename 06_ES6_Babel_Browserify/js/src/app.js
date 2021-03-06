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
import * as haha from './module1';

// 引入module2，module2是统一暴露的(module2里面给暴露的内容起了别名)
import {
    demo2,
    test2
} from "./module2";
// import {
//     HH1,
//     HH2
// } from "./module2";

// 引入module3，module3是默认暴露的
import module3 from "./module3";

// 引入module4，module4里用了多种暴露的方式
import module4, {
    arr1,
    bar,
    foo,
    str,
    student,
    dog
} from "./module4";

console.log(haha);
console.log(haha.data);
haha.demo1();
haha.test1();
demo2();
test2();
// HH1();
// HH2();
console.log(module3.name);
console.log(module3.age);
module3.speak();
console.log('module4:', arr1, str, student, dog);
bar();
foo();
dog.run();
console.log(module4);