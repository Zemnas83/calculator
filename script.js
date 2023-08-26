let operator, num1 = '', num2 = '';
let isOperatorChosen = false;
let isNewOperation = false;

const resultDisplay = document.querySelector('.result');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.textContent;

        if (!isNaN(value) || value === ".") { 
            // Reset for new operation
            if (isNewOperation) {
                num1 = value;   // Set the clicked value as the new num1
                num2 = '';
                operator = null;
                isOperatorChosen = false;
                isNewOperation = false; // Reset the flag
                resultDisplay.textContent = num1;
                return;   // Exit early
            }

            if (!isOperatorChosen) {
                if (!(num1.includes('.') && value === '.')) {
                    num1 += value;
                    resultDisplay.textContent = num1;
                }
            } else {
                if (!(num2.includes('.') && value === '.')) {
                    num2 += value;
                    resultDisplay.textContent = num2;
                }
            }
        } else if (value === "CLEAR") {
            resetCalculator();
        } else if (value === "+/-") {
            if (!isOperatorChosen) {
                num1 = toggleSign(num1);
                resultDisplay.textContent = num1;
            } else {
                num2 = toggleSign(num2);
                resultDisplay.textContent = num2;
            }
        } else {
            if (value === "=") {
                const output = operate(operator, parseFloat(num1), parseFloat(num2));
                resultDisplay.textContent = output;

                num1 = output.toString();
                num2 = '';
                operator = null;
                isOperatorChosen = false;
                isNewOperation = true;  // Set for new operation
            } else {
                if (!operator) {
                    operator = value;
                    isOperatorChosen = true;
                } else {
                    const output = operate(operator, parseFloat(num1), parseFloat(num2));
                    resultDisplay.textContent = output;

                    num1 = output.toString();
                    num2 = '';
                    operator = value;
                }
            }
        }
    });
});

function toggleSign(number) {
    if (number.startsWith("-")) {
        return number.slice(1);
    } else {
        return "-" + number;
    }
}

function resetCalculator() {
    num1 = '';
    num2 = '';
    operator = null;
    isOperatorChosen = false;
    isNewOperation = false;  // Reset when clearing
    resultDisplay.textContent = '0';
}

function operate(op, a, b) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "X":  
            return a * b;
        case "/":
            if (b === 0) {
                alert('Cannot divide by zero');
                return 'Error';
            }
            return a / b;
        default:
            return 'Error';
    }
}
