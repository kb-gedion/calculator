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