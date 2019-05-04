// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// getArray<number>(3, 5)

// const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
//     return new Array(times).fill([param1, param2])
// }
// getArray(1, 'a', 3)

// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// interface GetArray<T> {
//     (arg: T, times: number): T[],
//     array: T[]
// }

// 泛型约束
interface ValueWithLength {
    length: number
}

const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg)
}
getArray([1, 2], 3)
getArray('abc', 3)
getArray({
    length: 2,
}, 3)

// 在泛型约束中使用类型参数
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}
const objs = {
    a: 'a',
    b: 'b',
}
getProps(objs, 'a')
// getProps(objs, 'c')
