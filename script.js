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

const display = document.querySelector('#display');
const numbers = document.querySelector('#left-btns');

numbers.addEventListener('click', (e) => {
  display.textContent += e.target.textContent;
});

