let firstNum;
let secondNum;
let operator = null;
let answer;


const keypad = document.querySelector(".bottomHalf");
const display = document.querySelector(".onDisplay");

function reset() {
    firstNum = null;
    secondNum = null;
    operator = null;
}

document.addEventListener("keypress", (e) => {
    let pressed = e.key;
    if (pressed === '/' || 
        pressed === '-' || 
        pressed === '+' || 
        pressed === 'x' ||
        pressed === '*' ||
        isNumber(pressed)) {
            processButton(pressed);
        }
    console.log(pressed);
})

keypad.addEventListener("click", (e) => {
    let pressed = e.target.textContent;
    processButton(pressed);
})

const add = function(x, y) {
    return +x + +y;
};
  
const subtract = function(x, y) {
    return +x - +y;
};

const sum = function(...arr) {
return arr.reduce((total, current) => (+total + +current), 0);

};

const multiply = function(...arr) {
return arr.reduce((total, current) => (+total * +current));
};

const divide = function(...arr) {
    return arr.reduce((total, current) => (+total / +current));
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return sum(a,b);
            break;
        case '-':
            return subtract(a, b); 
            break;
        case 'x':
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return (+b !== 0) ? divide(a, b) : "ERROR";
            break;
        default:
            return "ERROR";
    }
}

function isNumber(pressed) {
    return (+pressed >= 0 && +pressed <= 9)
}

function processButton(pressed) {
    if (pressed == 'AC' || pressed == 'Del') {
        display.textContent = "0";
        reset();
    } else if (pressed == 'OFF') {
        display.textContent = "";
        reset();
    } else if (isNumber(pressed)) {
        if (operator === null) {  
            firstNum = (firstNum) ? +firstNum + pressed : pressed;
            display.textContent = firstNum;
        }
        else if (operator) {
            secondNum = (secondNum) ? +secondNum + pressed : pressed;
            display.textContent = secondNum;
        }
    } else if (pressed === '/' || pressed === '-' || pressed === '+' || pressed === 'x' || pressed === '*') {
        if (!firstNum) {
            display.textContent = "ERR /no num"
            reset();
        } else if (secondNum) {
            answer = operate(operator, firstNum, secondNum)
            display.textContent = (answer % 1 !== 0) ? answer.toFixed(3) : answer;
            operator = pressed;
            firstNum = answer;
            secondNum = null;

        } else {
            operator = pressed;
            display.textContent = operator;

        }
    } else if (pressed === '=') {
        if (firstNum && secondNum && operator) {
            answer = operate(operator, firstNum, secondNum)
            display.textContent = (answer % 1 !== 0) ? answer.toFixed(3) : answer;
            reset();
            firstNum = answer;
        } else {
            display.textContent = "ERR /invalid";
            reset();
        }
    }
}