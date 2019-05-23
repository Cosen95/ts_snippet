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

// 多态的this类型
class Counter {
    constructor(public count: number) {}
    public add(value: number) {
        this.count += value
        return this
    }
    public subtract(value: number) {
        this.count -= value
        return this
    }
}
let count = new Counter(10)
console.log(count.add(3).subtract(2))   // 链式操作

class PowCounter extends Counter {
    constructor(public count: number) {
        super(count)
    }
    public pow(value: number) {
        this.count = this.count ** value
        return this
    }
}
let powCounter = new PowCounter(2)
console.log(powCounter.pow(3).add(5).subtract(6))


// keyof
interface InfoInterface {
    name: string;
    age: number
}
let infoProp: keyof InfoInterface
infoProp = 'name'
// infoProp = 'size'

function getValue<T, K extends keyof T>(obj: T, names: K[]) {
    return names.map(n => obj[n])
}
const infoObj = {
    name: 'jack',
    age: 24
}
let infoValues = getValue(infoObj, ['name','age'])

// [] 索引访问操作符
type NameType = InfoInterface['name']

interface Type {
    a: never;
    b: never;
    c: string;
    d: number;
    e: undefined;
    f: null;
    g: object
}
type Test = Type[keyof Type]

interface Info1 {
    name: string;
    age: number;
    sex: string
}
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>







