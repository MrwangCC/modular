/** 
 * 定义一个有依赖的module2，module2依赖于module1，要使用module1中的数据
 */

define([
    'module1'
], function (module1) {
    let msg = '19971006';

    // 获取module1中的data和module2中的msg
    function getDataMsg() {
        return module1.getDataL() + msg;
    }

    return getDataMsg;
});