const form = document.querySelector(".form");
const output = document.querySelector(".output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const numInput = formData.get("numInput");
  const base10 = main(numInput);
  output.textContent = base10;
});

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
