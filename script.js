//Operator functions
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

//Function operate
function operate(a, operator, b) {
  switch (operator) {
    case "+":
        return add(a, b);
    case "-":
        return subtract(a, b);
    case "*":
        return multiply(a, b);
    case "/":
      if (b === 0){ 
        return "ERROR" 
      } else {
        return divide(a, b);
      }  
    default: 
        return "ERROR";
  } 
}

//DOM
const display = document.querySelector('#display');
const numbers = document.querySelector('#left-btns');
const operators = document.querySelector('#right-btns');
const clearBtn = document.querySelector('.clear');

let firstNumber;
let secondNumber;

//Numbers and equals
numbers.addEventListener('click', (e) => {
  if (e.target.textContent == "=") {
    const parts = display.textContent.split(" ");
    secondNumber = parts[2];
    display.textContent = operate(Number(firstNumber), operator, Number(secondNumber));
  } else if (display.textContent === "0" || display.textContent == "ERROR") {
    display.textContent = e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
});

//Operators
operators.addEventListener('click', (e) => {
  firstNumber = display.textContent;
  operator = e.target.textContent;
  display.textContent += " " + operator + " ";
});

clearBtn.addEventListener('click', (e) => {
  display.textContent = ""
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

