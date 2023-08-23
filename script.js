
let operator, num1, num2;
let result;

const btn = document.querySelector('btn');
btn.addEventListener('click',() =>{
    alert()
});

function operate(operator, num1, num2) {
    let result;
    if (operator == 'add') {
        result = add(num1, num2);
    } 
    else if (operator == 'subtract') {
        result = subtract(num1, num2);
    } 
    else if (operator == 'multiply') {
        result = multiply(num1, num2);
    } 
    else {
        result = divide(num1, num2);
    }
    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



