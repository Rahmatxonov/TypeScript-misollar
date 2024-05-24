"use strict";
const num1 = prompt("Please create number");
const num2 = prompt("Please create number");
if (num1 !== null && num2 !== null) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    const result = [number1, number2];
    console.log(result);
  } else {
    console.log("One or both inputs are not valid numbers.");
  }
} else {
  console.log("One or both inputs were cancelled.");
}
