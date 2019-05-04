// 接口初探
interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}

getFullName({
    firstName: 'Jack',
    lastName: 'cool',
})

// 可选属性
interface Vegetable {
    color?: string,
    readonly type: string
}

const getVegetables = ({ color, type}: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}

getVegetables({
    // color: 'green',
    type: 'Spinach',
})

// 只读属性
let juice: Vegetable = {
    type: 'juice',
}
// juice.type = 'banana'

// 函数类型
type AddFunc = (num1: number, num2: number) => boolean

let myAdd: AddFunc = (n1, n2) => {
    if (n1 > n2) {
        return true
    } else {
        return false
    }
}

// 可索引的类型
interface RoleDic {
    [id: number]: string
}
const role: RoleDic = {
    100: 'hello',
    // '100': 'jack',
}

// 接口的继承
interface Vegetables {
    price: string
}
interface Tomato extends Vegetables {
    weight: string
}
interface Carrot extends Vegetables {
    color: string
}
const tomato: Tomato = {
    price: '$5.8/kg',
    weight: '2.6kg',
}
const carrot: Carrot = {
    price: '$3.6/kg',
    color: 'brown',
}

// 混合类型
interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => {
        c.count++
    }
    c.count = 0
    return c
}
const counter: Counter = getCounter()
