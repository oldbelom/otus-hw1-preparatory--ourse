export function addAgeProp(obj) {
  const object = obj;
  const input = window.prompt("Введите число");
  object.age = +input;
}

export function createObjectCopy(obj) {
  const admin = { ...obj };
  admin.role = "admin";
  return admin;
}

export function destructsObject(obj) {
  const { name, age, role } = obj;
  console.log(name, age, role);
}
