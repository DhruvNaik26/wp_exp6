let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button button');

let currentInput = "";
let currentOp = "";
let prevInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '+' || value === '-' || value === '*' || value === '/') {
            currentInput += value;
            display.textContent = currentInput;
        }

        if (value === 'C') {
            display.textContent = '0';
            currentOp = "";
            currentInput = "";
            prevInput = "";
        } else if (value === '=') {
            if (currentOp && currentInput !== "") {
                currentInput = cal(currentOp, parseFloat(prevInput), parseFloat(currentInput));
                display.textContent = currentInput;
                prevInput = "";
                currentOp = "";
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            currentOp = value;
            prevInput = currentInput;
            // currentInput = "";
        }
    });
});

function cal(op, num1, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error"; // Handle division by zero
            }
            return num1 / num2;
        default:
            return "Error"; // Handle invalid operator
    }
}
