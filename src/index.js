var Validation;
(function (Validation) {
    var isLetterReg = /^[A-Za-z]+$/;
    Validation.isNumberReg = /^[0-9]+$/;
    Validation.checkLetter = function (text) {
        return isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
// import './example/basic-type';
// import './example/symbol';
// import './example/interface';
// import './example/function';
// import './example/generics';
// import './example/class';
// import './example/enum';
// import './example/inference-compatibility';
// import './example/advanced-type';
/// <reference path='./ts-modules/space.ts' />
var isLetter = Validation.checkLetter(true);
console.log(isLetter);

