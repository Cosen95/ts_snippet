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