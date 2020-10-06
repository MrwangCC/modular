/** 
 * 混合暴露
 */

// 分别暴露
export let arr1 = [1, 2, 3, 4, 5];

export function bar() {
    console.log('module4---bar()');
}

export function foo() {
    console.log('module4---foo()');
}

// 统一暴露
let str = 'Love_You';

let student = {
    name: 'kobe',
    agr: 18
}

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    run() {
        console.log("跑");
    }
}

let dog = new Dog('旺财', '3');

export {
    str,
    student,
    dog
}

// 默认暴露
export default {
    school: 'GUET',
    address: '北海'
}