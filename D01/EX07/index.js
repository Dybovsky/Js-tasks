function getRandomInt(max) {
  return Math.random() * max;
  //your code
}

function moduloEx7(num1, num2) {
  //your code
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
  return res;
}

let new_el = document.createElement("h3");
new_el.id = "output";
new_el.innerText = `${moduloEx7(getRandomInt(100), getRandomInt(100))}`;
document.body.appendChild(new_el);
