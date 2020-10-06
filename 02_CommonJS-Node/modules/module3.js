// 问题：暴露的本质到底是什么？module.exports所指向的对象
// 在CommonJs模块规范中，module.exports 不能喝 exports.xxx不能混用
// 如果混用，以module.exports为主

exports.peiqi = [1, 2, 3, 4, 5];

module.exports = function haha () {
    console.log('哈哈');
}
