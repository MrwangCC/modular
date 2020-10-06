'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bar = bar;
exports.foo = foo;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * 混合暴露
 */

// 分别暴露
var arr1 = exports.arr1 = [1, 2, 3, 4, 5];

function bar() {
    console.log('module4---bar()');
}

function foo() {
    console.log('module4---foo()');
}

// 统一暴露
var str = 'Love_You';

var student = {
    name: 'kobe',
    agr: 18
};

var Dog = function () {
    function Dog(name, age) {
        _classCallCheck(this, Dog);

        this.name = name;
        this.age = age;
    }

    _createClass(Dog, [{
        key: 'run',
        value: function run() {
            console.log("跑");
        }
    }]);

    return Dog;
}();

var dog = new Dog('旺财', '3');

exports.str = str;
exports.student = student;
exports.dog = dog;

// 默认暴露

exports.default = {
    school: 'GUET',
    address: '北海'
};