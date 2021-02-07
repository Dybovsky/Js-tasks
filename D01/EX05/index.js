function moduloEx5(num1, num2) {
  let res = "";
  if (num1 > num2) {
    if (num1 % num2 !== 0) {
      res = `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${
        num1 % num2
      }`;
    } else res = `The number ${num1} is bigger than ${num2}`;
  } else if (num1 < num2) {
    res = `The number ${num1} is less than ${num2}`;
  } else if (num1 === num2) {
    res = `The number ${num1} is equal to ${num2}`;
  }
  console.log(res);
} //your code

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
