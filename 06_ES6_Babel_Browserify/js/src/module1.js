/** 
 * module1使用了分别暴露
 */
export let data = "WangXiWen";

export function demo1() {
    console.log('我是module1里的demo1函数', data.toUpperCase);
}

export function test1() {
    console.log('我是module1里的test1函数', data.toLowerCase);
}