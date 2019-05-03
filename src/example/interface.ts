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
    type: string
}

const getVegetables = ({ color, type}: Vegetable) => {
    return `A ${color ? (color + ' '): ''}${type}`
}

getVegetables({
    // color: 'green',
    type: 'Spinach' 
})