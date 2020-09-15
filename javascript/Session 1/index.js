// used in index.html
console.log('Its Charlene again')

function sayHey(person) {
    console.log('Hey ' + person + '!')
}

function conversation(person) {
    Grade =  ('hey ' + person + '!')
}

const sayHey2 = person => 'Hey' + person;

let x = 11;
let y = 33;

const addition = x + y;
console.log('Addition: x + y =' + addition) // Addition: x + y = 44
const subtraction = x- y;
console.log('Subtraction: x - y =' + subtraction)
const multiplication = x * y;
console.log('Multiplication: x * y =' + multiplication)
const division = x / y;
console.log('Division: x / y =' + division)

let age = 33
const legalDrivingAge = 17

const oldEnough = age >= legalDrivingAge;

console.log('Are you old enough to drive?' + oldEnough)



var marks = 87;

function getGrades(marks){
switch(true) {
    case (marks > 90):
        document.write('You got an A+')
    break;
    case (mark > 80 && mark <= 90):
        document.write('You got an A')
    break;
    case (mark > 70 && mark <= 80):
        document.write('You got a B')
    break;
    case (mark > 60 && mark <= 70):
        document.write('You got a C')
    break;
    case (mark > 50 && mark <= 60):
        document.write('You got a D')
    break;
    case (mark > 40 && mark <= 50):
        document.write('You got an E')
    break;
    case (mark > 30 && mark <= 40):
        document.write('You got an F')
    break;
    default:
        document.write('Better Luck Next Time')                     
}
}

