let result = 0;
let operator = 1;

let reset = () => {
    result = 0;
    firstDigit = 0;
    secondDigit = 0;
}
let addition = (firstDigit, secondDigit) => {
    return firstDigit + secondDigit;
}
let subtraction = (firstDigit, secondDigit) => {
    return firstDigit - secondDigit;
}
let multiply = (firstDigit, secondDigit) => {
    return firstDigit * secondDigit;
}
let divide = (firstDigit, secondDigit) => {
    return firstDigit / secondDigit;
}

switch(operator) {
    case 1:
        //addition
        result += addition(4,5);
        break;
    case 2:
        //subtraction
        result += subtraction(4,4);
        break;
    case 3: 
        //multiply
        result += multiply(4,4);
        break;
    case 4:
        //multipy
        result += divide(3,3)
        break;
    case 5: 
        //clears the calculator
        reset();
    default:
        break;
}


