'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** 
 * module3使用了默认暴露，只能暴露一次
 */
exports.default = {
    name: 'wang',
    age: 18,
    speak: function speak() {
        var _this = this;

        setImmediate(function () {
            console.log('\u6211\u662F' + _this.name + '\uFF0C\u5E74\u9F84' + _this.age);
        }, 1000);
    }
};