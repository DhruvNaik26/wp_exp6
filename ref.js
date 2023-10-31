
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button button");

    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value >= '0' && value <= '9') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === "=") {
                if (currentOperator && previousInput !== "") {
                    currentInput = operate(currentOperator, parseFloat(previousInput), parseFloat(currentInput));
                    display.textContent = currentInput;
                    previousInput = "";
                    currentOperator = "";
                }
            } else {
                if (currentOperator) {
                    if (previousInput !== "") {
                        currentInput = operate(currentOperator, parseFloat(previousInput), parseFloat(currentInput));
                        display.textContent = currentInput;
                        previousInput = currentInput;
                        currentInput = "";
                    }
                }
                currentOperator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        });
    });

    function operate(operator, num1, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num2;
        }
    }

