const display = document.getElementById("display");
const keys = document.querySelector(".calculator__keys");
let operators = document.querySelectorAll(".operator");
const remove = document.getElementById("DEL");

let currentInput = "";
let lastOperator = "";
let shouldReset = false;
let result = "";
let expression = "";

keys.addEventListener("click", (e) => {
  const key = e.target.value;
  if (key === "") {
    display.textContent = "0";
    expression = "";
    return;
  }
  if (key == "undefined") {
    console.log(key);
    expression = expression + "";
  }
  if (key === "=") {
    try {
      expression = expression.replace(/^0+/, "");
      let result = eval(expression);
      if (!Number.isInteger(result)) {
        result = result.toFixed(4);
      }
      console.log(result);
      display.textContent = result;
      expression = result;
      currentInput = display.textContent;
      shouldReset = true;
    } catch {
      display.textContent = "Error";
      currentInput = "";
    }
    return;
  } else {
    expression = expression + key;
    display.innerText = expression;
  }
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    const key = e.target.value;
    expression = expression + key;
    display.innerText = expression;
  });
});

remove.addEventListener("click", () => {
  expression = String(expression).slice(0, -1);
  display.innerText = expression;
});
