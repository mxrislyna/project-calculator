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
        return parseFloat(add(a, b).toFixed(4));
    case "-":
        return parseFloat(subtract(a, b).toFixed(4));
    case "*":
        return parseFloat(multiply(a, b).toFixed(4));
    case "/":
      if (b === 0){ 
        return "ERROR" 
      } else {
        return parseFloat(divide(a, b).toFixed(4));
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
  const input = e.target.textContent;

  if (input == "=") { 
    parts = display.textContent.split(" ");
    secondNumber = parts[2];
    display.textContent = operate(Number(firstNumber), operator, Number(secondNumber));
    calculationJustFinished = true;
  } else if (calculationJustFinished == true) {
    display.textContent = input;
    calculationJustFinished = false;
  } else if (display.textContent === "0" || display.textContent == "ERROR") {
    display.textContent = input;
  } else if (input === ".") {
    parts = display.textContent.split(" ");
    if (!parts[parts.length - 1].includes(".")) {
      if (parts[parts.length - 1] == "") {
        display.textContent += "0";
      } else {
        display.textContent += ".";
      }
    }
  } else {
    display.textContent += input;
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

