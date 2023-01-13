import {
  getNode,
  sum,
  getInputValue,
  clearContents,
  insertLast,
} from "./lib/index.js";

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

function handler(e) {
  e.preventDefault();
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
