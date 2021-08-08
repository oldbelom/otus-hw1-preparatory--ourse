export function logSum(num) {
  let sum1 = 0;

  for (let i = num; i <= 100; i += 1) {
    sum1 += i;
  }

  console.log(sum1);
}

export function logMultiplyTable(num) {
  for (let i = 1; i <= 10; i += 1) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

export function logAarithmeticMean() {
  const inputNum = +window.prompt("Введите число");
  let sum2 = 0;
  let oddCount = 0;

  for (let i = 1; i <= inputNum; i += 1) {
    if (i % 2 !== 0) {
      sum2 += i;
      oddCount += 1;
    }
  }

  console.log(sum2 / oddCount);
}
