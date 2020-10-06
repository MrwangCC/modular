/** 
 * module2使用了统一暴露
 * arr是私有数据，不去暴露
 */
let arr = [1, 2, 3, 4, 5];

function demo2() {
    console.log('我是module2里的demo2数组', arr);
}

function test2() {
    console.log('我是module2里的test2数组', arr);
}

// 统一暴露(精简版)
export {
    demo2,
    test2
}

// 统一暴露(完整版)
// export{
//     demo2 as HH1,   // 暴露的同时可以赋一个别名
//     test2 as HH2
// }