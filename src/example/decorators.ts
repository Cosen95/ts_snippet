// 装饰器
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 
// 装饰器使用@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

// 1、由上至下依次对装饰器表达式求值。
// 2、求值的结果会被当作函数，由下至上依次调用。
// function setName() {
//     console.log('get setName')
//     return (target: any) => {
//         console.log('setName')
//     }
// }
// function setAge() {
//     console.log('get setAge')
//     return (target: any) => {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Decorator {

// }


// let sign = null
// function setName(name: string) {
//     return (target: new() => any) => {
//         sign = target
//         console.log(target.name)
//     }
// }

// @setName('jack')
// class Decorator {
//     constructor() {

//     }
// }
// console.log(sign === Decorator)
// console.log(sign === Decorator.prototype.constructor)


function addName(constructor: new() => any) {
    constructor.prototype.name = 'jack'
}

@addName
class Decorator {

}
interface Decorator {
    name: string
}
const decorator = new Decorator()
console.log(decorator.name)

// function classDecorator<T extends { new(...args: any[]): {} }>(target: T) {
//     return class extends target {
//         public newProperty = 'new property'
//         public hello = 'override'
//     }
// }

// @classDecorator
// class Gretter {
//     public property = 'property'
//     public hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Gretter('world'))

interface ObjWithAnyKeys {
    [key: string]: any
}
let obj2: ObjWithAnyKeys = {}
Object.defineProperty(obj2, 'name', {
    value: 'cool',
    writable: true,
    configurable: true,
    enumerable: false
})
console.log(obj2.name)


function enumerable(value: boolean) {
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}
class ClassD {
    constructor(public age: number) {}
    @enumerable(false)
    public getAge() {
        return this.age
    }
}
const classD = new ClassD(24)
