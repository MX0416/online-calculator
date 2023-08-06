console.log("hello");

let num1 = null;
let num2 = null;
let operator = null;

function operate (num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else {
    return "ERROR"
  }
}


function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}