import { SOCIAL_URL } from './extra.js';
console.log(SOCIAL_URL);
console.log("Hello World!");

/*Naming conventions:*/
let userage = "22";
let user_last_name = "Zhylenko";
const PI = 3.14;

class SimpleCalculator { // uppercase - for classes
    add(a, b) {
        return a + b;
    }
}
const myCalc = new SimpleCalculator();
console.log(myCalc.add(5, 3)); 

/*Correct examples of variables:*/
let userName = "Yuliia Zhylenko";
let user_full_name = "Yuliia Zhylenko";
let first_and_last_name = "Yuliia Zhylenko";
let fullName = "Yuliia Zhylenko";

/*Incorrect examples of variables:
let 1userName = "Yuliia Zhylenko";
let user name = "Yuliia Zhylenko";
let user-name = "Yuliia Zhylenko";
let var = "Yuliia Zhylenko";
let USERNAME = "Yuliia";*/

const user_name = prompt("Як тебе звати?");
alert(`Привіт, ${user_name}`);

function calcAge() {
    const CURRENT_YEAR = new Date().getFullYear();
    const birthYear = prompt("Введи рік свого народження:");
    if (birthYear === null) {
        alert('Введіть свій правильний вік');
        calcAge();
        return;
    }
 if (birthYear === '') {
        alert('Введіть свій вік');
        calcAge();
        return;
    }
if (isNaN(parseInt(birthYear))) {
        alert('Введіть свій правильний вік');
        calcAge();
        return;
    }
    const age = CURRENT_YEAR - birthYear;
    alert(`Твій вік: ${age}`);
}

calcAge();

const sideLength = prompt("Введи довжину сторони квадрата:");
const perimeter = sideLength * 4;
alert(`Периметр квадрата дорівнює: ${perimeter}`);

const radius = prompt("Введіть радіус кола:");
const area = Math.PI * (radius ** 2);
alert(`Площа кола: ${area.toFixed(2)}`);

const distance = prompt("Введіть відстань між містами (км):");
const time = prompt("За скільки годин ви хочете дістатися?");
const speed = distance / time;
alert(`Вам потрібно рухатися зі швидкістю: ${speed} км/год`);

const USD_TO_EUR_RATE = 0.85;
const dollars = prompt("Введіть суму в доларах (USD):");
const euro = dollars * USD_TO_EUR_RATE;
alert(`Сума в євро: ${euro.toFixed(2)} EUR`);