function moduloEx6(num1, num2) {
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

  let new_el = document.createElement("h3");
  new_el.id = "output";
  new_el.innerText = `${res}`;
  document.body.appendChild(new_el);
}

console.log(new_el);
