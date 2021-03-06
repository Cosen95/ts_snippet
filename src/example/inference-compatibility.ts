// 类型推论
// 上下文类型
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button)
}

// 类型兼容性
// 参数个数
// let x = (a: number) => 0
// let y = (a: number, c: string) => 0
// y = x;
// x = y;

// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y

// 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
// funcA = funcB;
funcB = funcA

// 返回值类型
let x = (): string | number => 0;
let y = (): string => 'a'
let z = (): boolean => false
x = y
// y = x
// y = z

// 函数重载
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}

function sum(arg1: number, arg2: number): number
function sum(arg1: any, arg2: any): any {
    return arg1 + arg2
}
let func = merge;
// func = sum

// 枚举
enum StatusEnum {
    On,
    Off
}
enum AnimalEnum {
    Dog,
    Cat
}
let ind = StatusEnum.On;
// ind = AnimalEnum.Dog

// 类
// class AnimalClass {
//     public static age: number
//     constructor(public name: string) {}
// }
// class PeopleClass {
//     public static age: string
//     constructor(public name: string) {}
// }
// class FoodIsClass {
//     constructor(public name: number) {}
// }
// let animal: AnimalClass
// let people: PeopleClass
// let food: FoodIsClass
// animal = people
// animal = food

class ParentClass {
    // private age: number
    constructor() {

    }
}
class ChildrenClass extends ParentClass {
    constructor() {
        super()
    }
}
class OtherClass {
    // private age: number
    constructor() {

    }
}

// const children: ParentClass = new ChildrenClass()
// const other: ParentClass = new OtherClass()

interface Data<T> {
    data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2
