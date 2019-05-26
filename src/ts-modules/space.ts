namespace Validation {
    const isLetterReg = /^[A-Za-z]+$/
    export const isNumberReg = /^[0-9]+$/
    export const checkLetter = (text: any) => {
        return isLetterReg.test(text)
    }
}