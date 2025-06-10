// main.js

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function appendOperator(operator) {
  const display = document.getElementById('display');
  display.value += ` ${operator} `;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  const display = document.getElementById('display');
  const expression = display.value;

  try {
    const tokens = expression.trim().split(" ");

    // Si hay más de 3 tokens, usa eval (solo para expresiones más complejas)
    if (tokens.length !== 3) {
      const result = eval(expression);
      display.value = result;
      return;
    }

    const [a, op, b] = tokens;
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    let result;

    switch (op) {
      case '+': result = suma(num1, num2); break;
      case '-': result = resta(num1, num2); break;
      case '*': result = multiplicacion(num1, num2); break;
      case '/': result = division(num1, num2); break;
      default: result = eval(expression); break;
    }

    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
