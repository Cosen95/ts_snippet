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

## Symbols
自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。

symbol类型的值是通过Symbol构造函数创建的。
```
let sym1 = Symbol();

let sym2 = Symbol("key"); // 可选的字符串key

```
Symbols是不可改变且唯一的。
```
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols是唯一的
```
像字符串一样，symbols也可以被用做对象属性的键。
```
let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"
```
除了用户定义的symbols，还有一些已经众所周知的内置symbols。 内置symbols用来表示语言内部的行为。
* Symbol.hasInstance
方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。
* Symbol.isConcatSpreadable
布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。
* Symbol.iterator
方法，被for-of语句调用。返回对象的默认迭代器。
* Symbol.match
方法，被String.prototype.match调用。正则表达式用来匹配字符串。
* Symbol.replace
方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。
* Symbol.search
方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。
* Symbol.species
函数值，为一个构造函数。用来创建派生对象。
* Symbol.split
方法，被String.prototype.split调用。正则表达式来用分割字符串。
* Symbol.toPrimitive
方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。
* Symbol.toStringTag
方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。
* Symbol.unscopables
对象，它自己拥有的属性会被with作用域排除在外。

## 接口
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

### 接口初探
```
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
```

### 可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
```
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
```

* 多余属性绕过检查
    * 类型断言

    ```
    let Juice = getVegetables({ color: 'orange', type: 'juice', price: '14/g' } as Vegetable);
    ```

    * 添加一个字符串索引签名

    ```
    interface Vegetable {
        color?: string,
        type: string,
        [propName: string]: any
    }
    ```

    * 将这个对象赋值给一个另一个变量

    ```
    const vegetableInfo = {
        color: 'orange',
         type: 'juice',
         size: '8kg'
    }
    let Juice = getVegetables(vegetableInfo)
    ```

### 只读属性
一些对象属性（数组同样适用）只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
```
interface Vegetable {
    color: string,
    readonly type: string
}
let juice: Vegetable = {
    type: 'juice'
}
juice.type = 'banana';  // error
```

### 函数类型
接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
```
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
```

### 可索引的类型
与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 
```
interface RoleDic {
    [id: number]: string
}
const role: RoleDic = {
    100: 'hello',
    // '100': 'jack',
}
```
共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

### 接口的继承
接口的继承让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
```
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
```

### 混合类型
混合类型就是一个对象可以同时做为函数和对象使用，并带有额外的属性。
```
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
```

## 函数

### 函数类型
函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。
```
let add = (arg1: number, arg2: number): number => arg1 + arg2
```

### 可选参数和默认参数
在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。可选参数必须跟在必须参数后面。
```
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunc: AddFunction
addFunc = (x: number, y: number) => x + y
addFunc = (x: number, y: number = 0) => x + y
```

### 剩余参数
必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。

在TypeScript里，你可以把所有参数收集到一个变量里：
```
const handleData = (arg1: number, ...args: number[]) => {
    // ...
}
```

### 重载
根据传入不同的参数而返回不同类型的数据。方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用。
```
function handleReload(x: string): string[]
function handleReload(x: number): number[]
function handleReload(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item: any) => Number(item))
    }
}
```
为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

注意，function handleReload(x: any): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收字符串另一个接收数字。 

## 泛型
使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 
### 泛型变量
```
const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}
getArray<number>(3, 5)

const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
    return new Array(times).fill([param1, param2])
}
getArray(1, 'a', 3)
```
### 泛型类型
```
type GetArray = <T>(arg: T, times: number) => T[]
let getArray: GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
```

### 泛型接口
```
interface GetArray<T> {
    (arg: T, times: number): T[],
    array: T[]
}
```

### 泛型约束
我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。

相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字还实现约束：
```
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
```

* 在泛型约束中使用类型参数
你可以声明一个类型参数，且它被另一个类型参数所约束。比如，
    ```
    const getProps = <T, K extends keyof T>(object: T, propName: K) => {
        return object[propName]
    }
    const objs = {
        a: 'a',
        b: 'b',
    }
    getProps(objs, 'a')
    // getProps(objs, 'c')
    ```

## tsconfig.json 配置
```
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                          /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "lib": [
      "es6",
      "dom"
    ],                             /* lib用于指定要包含在编译中的库文件 */
    // "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    // "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    // "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
    // "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
    // "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    // "outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    // "outDir": "./",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    // "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    // "composite": true,                     /* 是否编译构建引用项目  */
    // "incremental": true,                   /* Enable incremental compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    // "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
    // "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
    // "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
    // "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    "strict": true,                           /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */
    // "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
    // "strictNullChecks": true,              /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */
    // "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */
    // "strictBindCallApply": true,           /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
    // "strictPropertyInitialization": true,  /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */
    // "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
    // "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
    // "noUnusedParameters": true,            /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
    // "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    // "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    // "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
    // "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
    // "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    // "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    // "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    // "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
    "esModuleInterop": true,                  /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */
    // "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */

    /* Source Map Options */
    // "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    // "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
    // "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    // "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */

    /* Experimental Options */
    "experimentalDecorators": true,        /* 用于指定是否启用实验性的装饰器特性 */
    // "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  },
  // "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符
  // "include": [],  // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  // "exclude": [],  // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  // "extends": "",   // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件
  // "compileOnSave": true,  // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
  // "references": [],  // 一个对象数组，指定要引用的项目
}

```


