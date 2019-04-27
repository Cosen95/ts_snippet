// 布尔类型
let bool: boolean = true;

// 数值类型
let num: number = 12;
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = `数值是${num}`

// 数值类型
// 写法1
let arr1: number[]
arr1 = [5]

// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1, 'spring']

// 元祖类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log(Roles.ADMIN);

// any类型
let value: any
value = 'summer';
value = 12;
value = false
const arr4: any[] = [1, false]

// void类型
const consoleText = (text: string): void => {
    console.log(text)
}