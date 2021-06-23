const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

// Handles Click Event on Submit Button
const submitBtnClickHandler = (event) => {
  event.preventDefault();
  if (
    username.value &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  ) {
    if (username.value.length <= 6) {
      return alert('Username must be longer than 6 characters');
    }
    if (password.value.length <= 6) {
      return alert('Password must be longer than 6 characters');
    }

    alert('Registration Successful');

    username.value = '';
    password.value = '';
    confirmPassword.value = '';
  } else {
    if (password.value !== confirmPassword.value) {
      return alert("Passwords don't match");
    }
    return alert('All fields must not be empty');
  }
};

submitBtn.onclick = submitBtnClickHandler;

// Calculator App Codes
let calculatorContainer = document.getElementById('calculatorContainer');
let mainDisplay = document.getElementById('mainDisplay');

let oldVal = 0;
let newVal = '';
let operations = ['+', '-', '*', '/'];
let operand = '';

let queue = '';

mainDisplay.value = '0';

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);

const updateDisplay = (number, msg = '') => {
  mainDisplay.value = `${msg}${msg ? ': ' : ''}${number}`;
};

const numberClickHandler = (number) => {
  queue += number;
  updateDisplay(queue);
  setNewVal(queue);
};

const setNewVal = (num) => {
  newVal = num;
};

const setOldVal = (num) => {
  oldVal = num;
};

const setOperation = (operation) => {
  operand = operation;
};

const clearDisplay = () => {
  mainDisplay.value = '';
};

const compute = () => {
  let result = 0;
  switch (operand) {
    case '+':
      result = add(oldVal, newVal);
      setOldVal(result);
      setNewVal(0);
      break;
    case '-':
      result = subtract(oldVal, newVal);
      setOldVal(result);
      setNewVal(0);
      break;
    case '*':
      result = multiply(oldVal, newVal);
      setOldVal(result);
      setNewVal(0);
      break;
    case '/':
      result = divide(oldVal, newVal);
      setOldVal(result);
      setNewVal(0);
      break;
  }
};

const operationClickHandler = (operation) => {
  if (oldVal && newVal) {
    compute();
    queue = '';
    updateDisplay(oldVal, 'Ans');
    return;
  }
  setOperation(operation);
  if (newVal) {
    setOldVal(newVal);
    setNewVal(0);
  }
  clearDisplay();
  queue = '';
};

const displayBoxes = (text) => {
  let box = document.createElement('div');
  box.classList.add('box');
  box.textContent = text;

  if (typeof text === 'number') {
    box.addEventListener('click', () => numberClickHandler(box.textContent));
  } else {
    box.style.order = 2;
    box.style.height = '75px';
    box.style.width = '75px';
    box.addEventListener('click', () => operationClickHandler(box.textContent));
  }

  if (text === 0) {
    box.style.order = 1;
    box.style.width = '100%';
  }

  calculatorContainer.appendChild(box);
};

for (let i = 0; i <= 9; i++) {
  displayBoxes(i);
}

for (let i = 0; i < operations.length; i++) {
  displayBoxes(operations[i]);
}
