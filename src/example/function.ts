let add = (arg1: number, arg2: number): number => arg1 + arg2

// 可选参数和默认参数
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunc: AddFunction
addFunc = (x: number, y: number) => x + y
addFunc = (x: number, y: number = 0) => x + y

// 剩余参数
const handleData = (arg1: number, ...args: number[]) => {
    // ...
}

// 重载
function handleReload(x: string): string[]
function handleReload(x: number): number[]
function handleReload(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item: any) => Number(item))
    }
}
