'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
/** 
 * module1使用了分别暴露
 */
var data = exports.data = "WangXiWen";

function demo1() {
    console.log('我是module1里的demo1函数', data.toUpperCase);
}

function test1() {
    console.log('我是module1里的test1函数', data.toLowerCase);
}