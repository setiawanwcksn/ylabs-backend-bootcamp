const notate = require('./notation')
const validate = require('./validator')

var number_1 = validate.validation(123)
var number_2 = notate.notation("8.2")

console.log(number_1)
console.log(number_2)