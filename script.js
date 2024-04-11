let firstNum;
let secondNum;
let operator;



const add = function(x, y) {
    return x + y;
};
  
const subtract = function(x, y) {
    return x - y;
};

const sum = function(...arr) {
return arr.reduce((total, current) => (total + current), 0);

};

const multiply = function(...arr) {
return arr.reduce((total, current) => (total * current));
};

const divide = function(...arr) {
    return arr.reduce((total, current) => (total / current));
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return sum(a,b);
            break;
        case '-':
            return subtract(a, b); 
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            return "ERROR";
    }
}