import { StackCalculator } from "./calc.mjs"
const safeCalculatorHandler = {
    get: (target, property) => {
        if (property == 'divide') {
            return function () {
                const peekvalue = target.peekvalue()
                if (peekvalue === 0) {
                    throw new Error("Cannot divide by zero")
                }
                return target.devide()
            }
        }
        return target[property]
  }
}


const evenNumbers = new Proxy([], {
    get: (target, index) => index * 2,
    has: (target, number) => number % 2 === 0
})


const proxy = new Proxy()
const calc = new StackCalculator()
const safeCalculator = proxy(calc, safeCalculatorHandler)
