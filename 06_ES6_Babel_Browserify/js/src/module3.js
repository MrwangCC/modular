/** 
 * module3使用了默认暴露，只能暴露一次
 */
export default {
    name: 'wang',
    age: 18,
    speak() {
        setImmediate(() => {
            console.log(`我是${this.name}，年龄${this.age}`);
        }, 1000)
    }
};