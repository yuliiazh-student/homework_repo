const a = 0.1;
const b = 0.2;
const result = (a + b).toFixed(1);
console.log(Number(result));

const str = "1";
const num = 2;
const mathResult = +str + num; 
console.log(mathResult);


function calcFiles() {
    const flashSizeGb = prompt("Вкажіть обсяг флешки у Гб:");
    const fileSizeMb = 820;
    if (flashSizeGb === null) {
        alert('Вкажіть правильний обcяг флешки у Гб');
        calcFiles();
        return;
    }
    if (flashSizeGb === '') {
        alert('Вкажіть обcяг флешки у Гб');
        calcFiles();
        return;
    }
    if (isNaN(parseInt(flashSizeGb))) {
        alert('Вкажіть правильний обcяг флешки у Гб');
        calcFiles();
        return;
    }
    const flashSizeMb = flashSizeGb * 1024;
    const filesCount = Math.floor(flashSizeMb / fileSizeMb);
    alert(`На флешку поміститься ${filesCount} шт повних файлів.`);
}

calcFiles();


const money = prompt("Скільки у тебе грошей в гаманці?");
const price = prompt("Яка ціна шоколадки?");
const count = Math.floor(money / price); 
const change = Number((money % price).toFixed(2));
alert(`Ти можеш купити: ${count}`);
alert(`Твоя здача: ${change}`);


const number = parseInt(prompt("Введіть тризначне число:")); 
const firstDigit = Math.trunc(number / 100);
const middleDigit = Math.trunc(number / 10) % 10;
const lastDigit = number % 10; 
alert(`Число задом наперед: ${lastDigit}${middleDigit}${firstDigit}`);

console.log((number + '').length === 3);


const deposit = prompt("Введіть суму вкладу:");
const rate = 5;
const months = 2;
const profit = (deposit * (rate / 100) / 12) * months;
alert(`Сума нарахованих відсотків за 2 місяці: ${profit.toFixed(2)}`);


console.log(2 && 0 && 3);    // Поверне 0
console.log(2 || 0 || 3);    // Поверне 2
console.log(2 && 0 || 3);    // Поверне 3