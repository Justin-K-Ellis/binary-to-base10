const form = document.querySelector(".form");
const output = document.querySelector(".output");
const input = document.querySelector("#numInput");
const clear = document.querySelector(".clear");

// Submition
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const numInput = formData.get("numInput");
  const base10 = main(numInput);
  output.textContent = base10;
});

// Converstion logic
function main(str) {
  const nums = processStringToNumArr(str);
  return computeBinaryToBase10(nums);
}

function processStringToNumArr(str) {
  let arr = str.split("").reverse();
  return arr.map((x) => parseInt(x));
}

function computeBinaryToBase10(arr) {
  let factor = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * factor;
    factor *= 2;
  }
  return sum;
}

// Validate form input
input.addEventListener("input", (event) => {
  const value = event.target.value;
  const isBinary = value.match(/^[01]+$/);
  if (!isBinary) {
    input.setCustomValidity("Enter 0s and 1s only.");
  } else {
    input.setCustomValidity("");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});
