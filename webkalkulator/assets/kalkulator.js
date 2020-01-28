const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

const updateDisplay = () => {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
};

const clearCalculator = () => {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
};

const inputDigit = digit => {
  if (
    calculator.waitingForSecondNumber &&
    calculator.firstNumber === calculator.displayNumber
  ) {
    calculator.displayNumber = digit;
  } else {
    if (calculator.displayNumber === "0") {
      calculator.displayNumber = digit;
    } else {
      calculator.displayNumber += digit;
    }
  }
};

const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener("click", event => {
    //mendapat object elemnt yg dicklik
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performanceCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}

const inverseNumber = () => {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
};

const handleOperator = operator => {
  if (!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
  } else {
    alert("operator sudah ditetapkan...");
  }
};

const performanceCalculation = () => {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("operator belum ditetapkan...");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  calculator.displayNumber = result;
};
