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
const delBtn = document.querySelector('.del');

let firstNumber;
let secondNumber;
let operator;
let calculationJustFinished = false;

//Numbers
numbers.addEventListener('click', (e) => {
  if (e.target.textContent == "=") { 
    parts = display.textContent.split(" ");
    secondNumber = parts[2];
    display.textContent = operate(Number(firstNumber), operator, Number(secondNumber));
    calculationJustFinished = true;
  } else if (calculationJustFinished == true) {
    display.textContent = e.target.textContent;
    calculationJustFinished = false;
  } else if (display.textContent === "0" || display.textContent == "ERROR") {
    display.textContent = e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
});

//Operators
operators.addEventListener('click', (e) => {
  let newOperator = e.target.textContent;
  const parts = display.textContent.split(" ");

  if (parts[2]) {
    secondNumber = parts[2];
    display.textContent = operate(Number(firstNumber), operator, Number(secondNumber));
    calculationJustFinished = true;
  }
  
  if (display.textContent.endsWith(" ")) {
    operator = newOperator;
    let currText = display.textContent;
    let shortenedCurrText = currText.trimEnd().slice(0,-1);
    display.textContent =  shortenedCurrText + newOperator + " ";
  } else {
    firstNumber = display.textContent;
    operator = newOperator;
    display.textContent += " " + operator + " ";
  }
});

//Clear/AC button 
clearBtn.addEventListener('click', () => {
  display.textContent = ""
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

//Del button
delBtn.addEventListener('click', () => {
  let text = display.textContent;
  let shortenedText = text.trimEnd().slice(0, -1).trimEnd();
  display.textContent = shortenedText;

  if (display.textContent === "") {
    display.textContent = "0";
  }
});