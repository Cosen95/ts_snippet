# ts_snippets

## ts学习进阶

## 基础类型

### 布尔值
最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）
```
let bool: boolean = true;
```

### 数字
和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，Typescript还支持ECMAScript 2015中引入的二进制和八进制字面量。
```
let num: number = 12;
num = 0b1111011
num = 0o173
num = 0x7b
```

### 字符串
ts中也可使用es6中的模板字符串来定义多行文本和内嵌表达式
```
let str: string
str = `数值是${num}`
```

### 数组
TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
```
let arr1: number[]
arr1 = [5]
```
第二种方式是使用数组泛型，Array<元素类型>：
```
let arr2: Array<number> = [2,5,8]
```

### 元组 Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```
let tuple: [string, number, boolean]
tuple = ['a', 1, false]
```

### 枚举
enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
```
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
console.log(Roles.ADMIN);   // 1
```

### any 任意值
有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
```
let value: any
value = 'summer';
value = 12;
value = false
const arr4: any[] = [1, false]
```

### void 空值
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
```
const consoleText = (text: string): void => {
    console.log(text)
}
```

### null和undefined
TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。默认情况下null和undefined是所有类型的子类型。
```
let u: undefined;
u = undefined;
// u = 12

let n: null;
// n = 'string';
n = null;
```

### never
never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
```
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true) {

    }
}
let neverVariable = (() => {
    while(true) {

    }
})()
num = neverVariable
```

### 类型断言
有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
类型断言有两种形式。 其一是“尖括号”语法，另一个为as语法。
```
const getLength = (target: string | number): number => {
    if((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
```