let operator, num1 = '', num2 = '';
let isOperatorChosen = false;

const resultDisplay = document.querySelector('.result'); // Assuming '.result' is where you display results

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.textContent;

        if (!isNaN(value) || value === ".") { // Handle numbers and decimal
            if (!isOperatorChosen) {
                if (!(num1.includes('.') && value === '.')) { // Check to ensure only one decimal point
                    num1 += value;
                    resultDisplay.textContent = num1; // Display the number
                }
            } else {
                if (!(num2.includes('.') && value === '.')) {
                    num2 += value;
                    resultDisplay.textContent = num2;
                }
            }
        } else if (value === "CLEAR") { // Clear functionality
            resetCalculator();
        } else if (value === "+/-") { // Toggle between negative and positive
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
                resultDisplay.textContent = output; // Display the result

                // Reset for next operation but retain the result
                num1 = output.toString();
                num2 = '';
                operator = null;
                isOperatorChosen = false;
            } else {
                if (!operator) {
                    operator = value;
                    isOperatorChosen = true;
                } else {
                    const output = operate(operator, parseFloat(num1), parseFloat(num2));
                    resultDisplay.textContent = output; // Display the intermediate result
                    num1 = output.toString();
                    num2 = '';
                    operator = value;
                }
            }
        }
    });
});

// ... [rest of the functions remain unchanged]

// New function to toggle the sign
function toggleSign(number) {
    if (number.startsWith("-")) {
        return number.slice(1);
    } else {
        return "-" + number;
    }
}

// New function to reset the calculator
function resetCalculator() {
    num1 = '';
    num2 = '';
    operator = null;
    isOperatorChosen = false;
    resultDisplay.textContent = '0';
}


function operate(op, a, b) {
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "&times;":  // Using "X" based on your HTML for multiplication
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





