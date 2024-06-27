import { StackCalculator } from "./calc.mjs";
import {safeCalculator} from "./safeCalc.mjs";
import { SafCalculator } from "./calculator.mjs";
const clc = new safeCalculator(StackCalculator)
const calculator = new StackCalculator()
const clci = SafCalculator(calculator)
calculator.putValue(4)
clc.putValue(5)
clc.putValue(6)
clci.devide()
const m = clc.getValue()
console.log(m)










