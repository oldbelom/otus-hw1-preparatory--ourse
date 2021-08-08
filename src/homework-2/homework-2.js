export function logNumbersCompare(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

export function logMonth() {
  const input = window.prompt("Введите число от 1 до 12");

  switch (input) {
    case "1":
      console.log("Январь");
      break;
    case "2":
      console.log("Февраль");
      break;
    case "3":
      console.log("Март");
      break;
    case "4":
      console.log("Апрель");
      break;
    case "5":
      console.log("Май");
      break;
    case "6":
      console.log("Июнь");
      break;
    case "7":
      console.log("Июль");
      break;
    case "8":
      console.log("Август");
      break;
    case "9":
      console.log("Сентябрь");
      break;
    case "10":
      console.log("Октябрь");
      break;
    case "11":
      console.log("Ноябрь");
      break;
    case "12":
      console.log("Декабрь");
      break;
    default:
      console.log("неверное значение");
      break;
  }
}

export function logFiguresCompare(circleArea, squareArea) {
  const circleDiametr = 2 * Math.sqrt(circleArea / Math.PI);
  const squareSide = Math.sqrt(squareArea);

  if (squareSide >= circleDiametr) {
    console.log("Круг уместится");
  } else {
    console.log("Круг не уместится");
  }
}
