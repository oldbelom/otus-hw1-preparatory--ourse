export function logSumOfArrayElements(arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  console.log(sum);
}

export function createMultipliedArray(arr) {
  const newArr = arr.map((item) => item * 2);
  console.log(newArr);
}

export function logMaxAndMinArrayEl(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }

    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  console.log("Наименьший элемент: ", minValue);
  console.log("Наибольший элемент: ", maxValue);
}
