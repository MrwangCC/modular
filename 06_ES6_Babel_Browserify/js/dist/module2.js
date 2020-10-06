'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** 
 * module2使用了统一暴露
 * arr是私有数据，不去暴露
 */
var arr = [1, 2, 3, 4, 5];

function demo2() {
    console.log('我是module2里的demo2数组', arr);
}

function test2() {
    console.log('我是module2里的test2数组', arr);
}

// 统一暴露
exports.demo2 = demo2;
exports.test2 = test2;