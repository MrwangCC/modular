/** 
 * 主文件，用于汇总各个模块
 * 在ES6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的
 */
// 引入module1，module1是分别暴露的
import {
    data,
    demo1,
    test1
} from "./module1";
// 引入module2，module2是统一暴露的
import {
    demo2,
    test2
} from "./module2";
// 引入module3，module3是默认暴露的
import module3 from "./module3";

console.log(data);
demo1();
test1();
demo2();
test2();
console.log(module3.name);
console.log(module3.age);
module3.speak();