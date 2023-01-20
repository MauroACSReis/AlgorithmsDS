function add(num1, num2) {
return alert(num1 + num2);
}
function subtract(num1, num2) {
return alert(num1 - num2);
}
function multiply(num1, num2) {
return alert(num1 * num2);
}
function divide(num1, num2) {
return alert(num1 / num2);
}

function calculator (num1, num2, operator) {
return operator(num1, num2);
}

//calculator(num1, num2, operator);
calculator(1, 2 , add);
