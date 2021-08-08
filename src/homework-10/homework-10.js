export default function checkString() {
  const regDate = /[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}/;
  const regEmail = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  const regPhone =
    /\+*\d[\s\-(]{0,1}[0-9]{3}[\s\-)]{0,1}[0-9]{3}[\s-]{0,1}[0-9]{2}[\s-]{0,1}[0-9]{2}/;

  const input = window.prompt("Введите дату, email или номер телефона");

  if (regDate.test(input)) {
    console.log("Это дата");
  }

  if (regEmail.test(input)) {
    console.log("Это почта");
  }

  if (regPhone.test(input)) {
    console.log("Это телефон");
  }
}
