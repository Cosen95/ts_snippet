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
let x = (a: number) => 0
let y = (b: string) => 0
// x = y

// 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
// funcA = funcB;
funcB = funcA