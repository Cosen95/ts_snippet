// enum Status {
//     Uploading,
//     Success,
//     Failed
// }
// console.log(Status.Uploading)
// console.log(Status['Success'])
// console.log(Status)
enum Message {
    Success = 'yeah,u got',
    Failed = 'e,something error'
}
// console.log(Message.Failed)
// 异构
enum Res {
    Success = 'success',
    Failed = 0
}

enum Status {
    Off = 0,
    On,
}
interface Light {
    status: Status
}
const light: Light = {
    status: Status.Off
}


const enum Animal {
    Dog = 1
}
const dog = Animal.Dog
console.log(dog)