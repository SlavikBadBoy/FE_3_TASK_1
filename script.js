"use strict";
// task 1 Створив зміну з віком
const age = 14;
console.log("Мій вік", age);
// task 2 Створив змінну з іменем
const name = "Vyacheslav";
console.log("Моє ім'я", name);
// task 3 Створив змінну з boolean
const isStudent = true;
console.log(isStudent);
// task 4 Створив змінну з string
const myString =
  "Прагніть не до успіху, а до цінностей, які він дає, – Альберт Айнштейн.";
console.log(myString);
// task 5 Створив змінну з Number
let myNumber = 21;
myNumber = myNumber + 10;
console.log(myNumber);
// task 6 Створив змінну з Null
const myNull = null;
console.log(myNull);
// task 7 Створив змінну з Prompt
const userName = prompt("Як вас звати?");
const welcomeMessage = "Дуже приємно! Вітаємо в нашій системі! ";
console.log(welcomeMessage, userName);
// task 8 Створив змінну з confirm
const userOpinion = confirm("точно хочете підтвердити дію?");
if (userOpinion) {
  alert("Дякуємо за підтвердження!");
} else {
  alert("Ви успішно скасували дію. Дякуємо за увагу");
}
// task 9 створив змінну з alert!
alert("Дія небезпечна!");
const userConfirmation = confirm(
  "Ви точно хочете підтвердити виконання цієї дії?"
);
if (userConfirmation) {
  alert("Дія успішно підтверджена.");
} else {
  alert("Дію успішно скасовано. Дякуємо за увагу");
}
