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


type MapToPromise<T> = {
    [k in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapToPromise<Tuple>
let tuple2: promiseTuple = [
    new Promise((resolve, reject) => resolve(1)),
    new Promise((resolve, reject) => resolve('1')),
    new Promise((resolve, reject) => resolve(true))
]


// 1.任何类型都可以赋值给unknown类型
let value1: unknown;
value1 = 'a'
value1 = 123

// 2.如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，只能赋值给unknown和any类型
let value2: unknown;
let value3: any = value2

// 3.如果没有类型断言或基于控制流的类型细化时，不能在他上面进行任何操作
let value4: unknown
// value4 += 1

// 4.unknown与其他任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown
type type2 = unknown & unknown

// 5.unknown与其他任何类型（除了any）组成的联合类型，都等于unknown
type type3 = unknown | string
type type4 = unknown | any

// 6.never类型是unknown的子类型
type type5 = never extends unknown ?true : false

// 7.keyof unknown 等于类型never
type type6 = keyof unknown

// 8.只能对unknown进行等或不等操作，不能进行其他操作
value1 === value2
value1 !== value2
// value1 += value2

// 9.unknown类型的值不能访问它的属性、作为函数调用和作为类创建实例
let value5: unknown
// value5.age
// value5()
// new value5()

// 10.使用映射类型时，如果遍历的是unknown类型，则不会映射任何属性
type Type1<T> = {
    [P in keyof T]: number
}
type type7 = Type1<any>
type type8 = Type1<unknown>


// 条件类型
type Type2<T> = T extends string ? string : number

type TypeName<T> = 
    T extends string ? string : 
    T extends number ? number : 
    T extends boolean ? boolean : 
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object


type Diff<T, U> = T extends U ? never : T
type Test2 = Diff<string | number | boolean, undefined | number>

// infer
type Type3<T> = T extends any[] ? T[number] : T

type Type4<T> = T extends Array<infer U> ? U : T





