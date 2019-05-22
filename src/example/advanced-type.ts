// 交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U;
    res = Object.assign(arg1, arg2)
    return res
}
mergeFunc({ a: 'a' }, { b: 'b' })

// 联合类型
const getLengthFunc = (content: string | number): number => {
    if(typeof content === 'string') {
        return content.length
    } else {
        return content.toString().length
    }
}