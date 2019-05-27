// 装饰器

// 1、由上至下依次对装饰器表达式求值。
// 2、求值的结果会被当作函数，由下至上依次调用。
function setName() {
    console.log('get setName')
    return (target: any) => {
        console.log('setName')
    }
}
function setAge() {
    console.log('get setAge')
    return (target: any) => {
        console.log('setAge')
    }
}
@setName()
@setAge()
class Decorator {

}