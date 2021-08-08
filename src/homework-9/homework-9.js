export function isTriangleRight(...args) {
  const hypotenuse = Math.max(...args);
  const leg1 = Math.min(...args);
  const leg2 = +[...args]
    .filter((item) => item !== hypotenuse && item !== leg1)
    .join("");
  console.log(leg2);
  return hypotenuse ** 2 === leg1 ** 2 + leg2 ** 2;
}

export function logCircleProps(radius) {
  const circumference = Math.round(2 * Math.PI * radius);
  const circleArea = Math.round(Math.PI * radius ** 2);
  console.log(circumference);
  console.log(circleArea);
}

export function logQuadraticRoots(a, b, c) {
  const d = b * b - 4 * a * c;

  if (d < 0) {
    console.log("корней нет");
    return;
  }

  if (d === 0) {
    const x = (-b / 2) * a;
    console.log(x);
    return;
  }

  const x1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  const x2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  console.log(x1, x2);
}
