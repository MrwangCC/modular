/** 
 * 在AMD模块化，主js文件(入口文件)需要些一个特殊的配置
 */

requirejs.config({
    baseUrl: './js/modules/',

    // 在项目中所有能
    paths: {
        module1: 'module1',
        module2: 'module2'
    }
});

requirejs(['module2'], function (m2) {
    console.log(m2());
});