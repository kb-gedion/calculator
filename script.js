let firstNum;
let secondNum;
let operator = null;

const keypad = document.querySelector(".bottomHalf");
const display = document.querySelector(".onDisplay");

function reset() {
    firstNum = null;
    secondNum = null;
    operator = null;
}

keypad.addEventListener("click", (e) => {
    let pressed = e.target.textContent;
    display.textContent = pressed;

    if (pressed == 'AC') {
        display.textContent = "";
        reset();
    } else if (isNumber(pressed)) {
        if (operator === null) {
            firstNum = pressed;
        }
        else if (operator) {
            secondNum = pressed;
        }
    } else if (pressed === '/' || pressed === '-' || pressed === '+' || pressed === 'x') {
        if (!firstNum) {
            display.textContent = "ERR /must have number"
            reset();
        } else {
            operator = pressed;
        }
    } else if (pressed === '=') {
        if (firstNum && secondNum && operator) {
            display.textContent = operate(operator, firstNum, secondNum);
        } else {
            display.textContent = "ERR /invalid operation";
            reset();
        }
    }
    

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
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return "ERROR";
    }
}

function isNumber(pressed) {
    return (+pressed >= 0 && +pressed <= 9)
}