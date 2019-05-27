// 声明合并

// 合并接口
interface InfoInterface {
    name: string
}
interface InfoInterface {
    age: number
}
let infoInter: InfoInterface = {
    name: 'fengshuan',
    age: 21
}

// 合并命名空间和类
class Validations {
    constructor() {}
    public checkType() {}
}
namespace Validations {
    export const numberReg = /^[0-9]+$/
}

// 合并函数和命名空间
function countUp() {
    countUp.count++
}
namespace countUp {
    export let count = 0
}

// 合并枚举和命名空间
enum Colors {
    red,
    green,
    blue
}
namespace Colors {
    export const yellow = 3
}