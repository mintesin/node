export class StackCalculator {
    constructor(){
        this.stack = []
    }
    putValue(value) {
        this.stack.push(value)
    }
    getValue() {
        return this.stack.pop()
    }
    peekValue() {
        return this.stack[this.stack.length-1]
    } 
    clear() {
        this.stack=[]
    }
    divide() {
        const dividend = this.getValue()
        const divisor = this.getValue()
        const result = dividend / divisor
        this.putValue(result)
        return result
    }
    multiply() {
        const multiplicand = this.getValue()
        const multiplier = this.getValue()
        const result = multiplicand * multiplier
        this.putValue(result)
        return result
    }
}
// module.exports = { StackCalculator };