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
    lastName: 'cool'
})

// 可选属性
interface Vegetable {
    color?: string,
    readonly type: string
}

const getVegetables = ({ color, type}: Vegetable) => {
    return `A ${color ? (color + ' '): ''}${type}`
}

getVegetables({
    // color: 'green',
    type: 'Spinach' 
})

// 只读属性
let juice: Vegetable = {
    type: 'juice'
}
// juice.type = 'banana'

// 函数类型
interface AddFunc {
    (num1: number, num2: number): boolean
}

let myAdd: AddFunc = (n1, n2) => {
    if (n1 > n2) {
        return true
    } else {
        return false
    }
}