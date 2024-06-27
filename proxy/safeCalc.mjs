// import StackCalculator from './calc.mjs'

export class safeCalculator{
    constructor(calculator) {
        this.calculator = new calculator();
    }
    putValue(value) {
        this.calculator.putValue(value)
    }
    getValue() {
        return this.calculator.getValue()
    }
    peekValue() {
        return this.calculator.peekValue()
    }
    devide() {
        const devisor = this.calculator.peekValue()
        if (devisor === 0) {
            throw Error("Deviding by zero") 
        }
        return this.calculator.devide()
    }
    multiply() {
        return this.calculator.multiply()
    }
}
// module.exports = safeCalculator;