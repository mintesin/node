export function SafCalculator(calculator) {
    // this.calculator = new calculator();
    return {
        devide() {
            const peekValue = this.calculator.peekValue()
            if (peekValue === 0) {
                throw new Error("Cannot devide by zero")
            }
            return this.calculator.devide()
        },
        peekValue() {
            return this.calculator.peekValue()
        },
        putValue() {
            return this.calculator.putValue()
        },




    }
}