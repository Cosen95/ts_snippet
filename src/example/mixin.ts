// mixin 混入
class Disposable {
    isDisposed: boolean = false;
    dispose() {
        
    }
}
class Activatable {
    isActive: boolean = false;
    activate() {

    }
    deactivate() {
        
    }
}
class SmartObject implements Disposable, Activatable {
    isDisposed: boolean = false;
    isActive: boolean = false;
    dispose!: () => void;
    activate!: () => void;
    deactivate!: () => void;
    constructor() {
        
    }
}
function mixins(target: any, from: any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
            target.prototype[key] = fromItem.prototype[key]
        })
    })
}
mixins(SmartObject, [Disposable, Activatable])
const smart = new SmartObject()
console.log(smart)