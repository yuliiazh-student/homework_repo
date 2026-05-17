/*TASK 1
Варіанти створення функцій:
1.Function Declaration(оголошення)
function greet(name) {
  return `Привіт, ${name}!`;
}

//2. Function Expression (функціональний вираз)//
//анонімна//
const greet = function (name) {
  return `Привіт, ${name}!`;
};
//іменована//
const greet = function sayHello(name) {
  return `Привіт, ${name}!`;
};

//3.Arrow Function (cтрілкова функція)//
const greet = (name) => `Привіт, ${name}!`;

//4.Async Function (асинхронна функція)//
async function fetchData() {
  const data = await getData();
  return data;
}

//5. Constructor Function (функція-конструктор)//
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("Олег", 25);

//6.IIFE (Immediately Invoked Function Expression)//
(function() {
  const localMessage = "Привіт!";
  console.log(localMessage);
})();

//7.Callback-функції (функції зворотного виклику)//
function greet(name, callback) {
  console.log("Привіт, " + name);
  callback();
}
function sayBye() {
  console.log("До побачення!");
}
greet("Олег", sayBye);*/


function countArguments() {
  alert(arguments.length);
}

function compareNumbers() {
  const n1 = Number(prompt("Введіть перше число:"));
  const n2 = Number(prompt("Введіть друге число:"));
  if (isNaN(n1) || isNaN(n2)) {
    alert("Будь ласка, вводьте тільки числа!");
    return; 
  }
  let result;
  if (n1 < n2) {
    result = -1;
  } else if (n1 > n2) {
    result = 1;
  } else {
    result = 0;
  }
  alert("Результат порівняння: " + result);
}


function getFactorial() {
  const input = prompt("Введіть число для обчислення факторіала:");
  if (input === null) return; 
  const num = Number(input);
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    alert("Будь ласка, введіть ціле додатне число!");
    return;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i; 
  }
  alert(`Факторіал числа ${num} дорівнює: ${result}`);
}


function combineDigits() {
  const d1 = prompt("Введіть першу цифру:");
  const d2 = prompt("Введіть другу цифру:");
  const d3 = prompt("Введіть третю цифру:");
  if (d1 === null || d2 === null || d3 === null) return;
  const finalNumber = Number(d1 + d2 + d3);
  if (isNaN(finalNumber)) {
    alert("Помилка! Ви ввели не цифри.");
    return;
  }
  alert("Отримане число: " + finalNumber);
}


function calculateArea() {
    let lengthInput = prompt("Введіть довжину:");
  let length = parseFloat(lengthInput);
  if (isNaN(length)) {
            alert("Помилка! Довжина має бути числом.");
            return;
        }
    let widthInput = prompt("Введіть ширину, або залиште пустим для обчислення площі квадрата:");
    let width;
    if (widthInput === null || widthInput.trim() === "") {
        width = length;
    } else {
        width = parseFloat(widthInput);
  }
     if (isNaN(width)) {
            alert("Помилка! Ширина має бути числом.");
            return; 
        }
    let area = length * width;
    alert("Площа фігури: " + area);
}


function checkPerfectNumber(num, showAlert = true) {
    if (num === undefined || num instanceof Event) {
        let input = prompt("Введіть число для перевірки:");
        num = parseInt(input);
    }
    if (isNaN(num) || num <= 0) {
        if (showAlert) {
            alert("Помилка! Будь ласка, введіть ціле додатне число.");
        }
        return false;
    }
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    const isPerfect = (sum === num);
    if (showAlert) {
        if (isPerfect) {
            alert("Число " + num + " є досконалим!");
        } else {
            alert("Число " + num + " НЕ є досконалим.");
        }
    }
    return isPerfect;
}


function showPerfectInRange() {
    let minInput = prompt("Введіть мінімальне значення діапазону:");
    let maxInput = prompt("Введіть максимальне значення діапазону:");
    let min = parseInt(minInput);
    let max = parseInt(maxInput);
    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Помилка! Некоректний діапазон чисел.");
        return;
    }
    let results = "";
    for (let i = min; i <= max; i++) {
        if (checkPerfectNumber(i, false)) {
            results += i + ", "; 
        }
    }
    if (results !== "") {
        alert("Досконалі числа в діапазоні: " + results.slice(0, -2));
    } else {
        alert("У цьому діапазоні немає досконалих чисел.");
    }
}
