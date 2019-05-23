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


// 类型保护
// 1. paramName is Type
// 2. typeof类型保护
// 3. instanceof类型保护

// 可辨识联合（Discriminated Unions）

// 1.具有普通的单例类型属性
// 2.一个类型别名包含了哪些类型的联合
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch(s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius ** 2;
    }
}