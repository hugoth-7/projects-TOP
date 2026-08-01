const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".resultDisplay");

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "";
let shouldResetDisplay = false;

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(n1, n2, operator) {
    if (operator === "+") return add(n1, n2);
    if (operator === "-") return substract(n1, n2);
    if (operator === "*") return multiply(n1, n2);
    if (operator === "/") return divide(n1, n2);
}

function updateDisplay() {
    if (operator) {
        display.textContent = firstNumber + operator + displayValue;
    } else {
        display.textContent = displayValue;
    }
}

function formatResult(value) {
    return String(Math.round(value * 1000) / 1000);
}

function handleError() {
    displayValue = "Cannot divide by 0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = true;
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonId = e.currentTarget.id;

        if (button.classList.contains("number")) {
            if (shouldResetDisplay) {
                displayValue = "";
                firstNumber = null;
                operator = null;
                shouldResetDisplay = false;
            }

            displayValue += buttonId;
            updateDisplay();

        } else if (button.classList.contains("operator")) {
            if (operator && displayValue !== "") {
                secondNumber = Number(displayValue);
                const result = operate(firstNumber, secondNumber, operator);
                if (!Number.isFinite(result)) return handleError();

                firstNumber = result;
                secondNumber = null;
            } else if (firstNumber === null) {
                firstNumber = Number(displayValue || "0");
            }

            operator = buttonId;
            displayValue = "";
            shouldResetDisplay = false;
            updateDisplay();

        } else if (buttonId === "clear") {
            displayValue = "";
            firstNumber = null;
            secondNumber = null;
            operator = null;
            display.textContent = "";
            shouldResetDisplay = false;

        } else if (button.id === "equal") {
            if (firstNumber !== null && operator && displayValue !== "") {
                secondNumber = Number(displayValue);
                const result = operate(firstNumber, secondNumber, operator);
                if (!Number.isFinite(result)) return handleError();

                displayValue = formatResult(result);
                firstNumber = null;
                secondNumber = null;
                operator = null;
                shouldResetDisplay = true;
                updateDisplay();
            }
        }
    });
});
