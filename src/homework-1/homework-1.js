export function logСalculations(num1, num2) {
  const sum = num1 + num2;
  const multiply = num1 * num2;
  console.log(multiply, sum);
}

export function logStringsLength(str1, str2) {
  const stringsSum = str1 + str2;
  console.log(stringsSum.length);
}

export function logInputSum() {
  const input = window.prompt("Введите трёхзначное число");
  const inputSum = +input[0] + +input[1] + +input[2];
  console.log(inputSum);
}
