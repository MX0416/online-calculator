console.log("hello");

let num1 = null;
let num2 = null;
let currentOperator = null;
let displayValue = null;

function operate (num1, num2, operator) {
  if (currentOperator == "+") {
    return add(num1, num2);
  } else if (currentOperator == "-") {
    return subtract(num1, num2);
  } else if (currentOperator == "÷") {
    if (num2 == 0) {
      alert("You can't divide by zero!")
    } else {
      return divide(num1, num2);
    }
  } else if (currentOperator == "x") {
    return multiply(num1, num2);
  } else {
    return "ERROR"
  }
}


function add (num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return (num1 / num2).toFixed(3);
}


// creating variables
const currentScreen = document.querySelector('#current-screen');
const previousScreen = document.querySelector('#previous-screen');
const allBtns = document.getElementsByClassName('number');
const allOperators = document.getElementsByClassName('operator');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

// event listener for every number
for (const btn of allBtns) {
  if (num1 == null) {
    btn.addEventListener("click", function(e) {
      currentScreen.textContent += e.target.textContent;
    });
  } 
}

// add event listener and logic for operators
for (const operator of allOperators) {
    operator.addEventListener("click", function (e) {
      if (previousScreen.textContent === "") {
        num1 = currentScreen.textContent
        currentOperator = e.target.textContent
        previousScreen.textContent = num1 + " " + currentOperator + " ";
        currentScreen.textContent = "";
      } else {
      num2 = currentScreen.textContent;
      previousScreen.textContent = operate(num1, num2, currentOperator) + " " + e.target.textContent + " ";
      currentScreen.textContent = "";
      num1 = operate(num1, num2, currentOperator);
      num2 = null;
      currentOperator = e.target.textContent;
    }
    });

}

// event listener for equals button
equalBtn.addEventListener("click", function(e) {
  num2 = currentScreen.textContent;
  previousScreen.textContent = "";
  currentScreen.textContent = operate(num1, num2, currentOperator);
  num1 = null;
  num2 = null;
  currentOperator = null;
});

// event listener for clear button
clearBtn.addEventListener("click", function() {
  num1 = null;
  num2 = null;
  currentOperator = null;
  previousScreen.textContent = "";
  currentScreen.textContent = "";
});

// event listener for delete button.
deleteBtn.addEventListener("click", function() {
  currentScreen.textContent = currentScreen.textContent.slice(0, currentScreen.textContent.length - 1);
})