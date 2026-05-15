function tellYourAge() {
    let age = prompt("Введіть свій вік:");
    if (age === null || age.trim() === "" || isNaN(age)) {
        alert("Помилка! Введіть коректне число.");
    } else {
        age = Number(age);
        if (age < 0) alert("Вік не може бути менше 0.");
        else if (age <= 11) alert("Ви дитина.");
        else if (age <= 17) alert("Ви підліток.");
        else if (age <= 59) alert("Ви дорослий.");
        else alert("Ви пенсіонер.");
    }
}

function enterTheNumber() {
    let number = prompt("Введіть число від 0 до 9:");
    switch (number) {
        case "0":
            alert(")");
            break;
        case "1":
            alert("!");
            break;
        case "2":
            alert("@");
            break;
        case "3":
            alert("#");
            break;
        case "4":
            alert("$");
            break;
        case "5":
            alert("%");
            break;
        case "6":
            alert("^");
            break;
        case "7":
            alert("&");
            break;
        case "8":
            alert("*");
            break;
        case "9":
            alert("(");
            break;
        default:
            alert("Помилка! Потрібно ввести цифру від 0 до 9.");
    }
}

function sumOfNumbers() {
    const start = parseInt(prompt("Введіть початок діапазону:"));
    const end = parseInt(prompt("Введіть кінець діапазону:"));
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert(`Сума чисел у діапазоні від ${start} до ${end} дорівнює: ${sum}`);
}

function findGCD() {
    let num1 = parseInt(prompt("Введіть перше число:"));
    let num2 = parseInt(prompt("Введіть друге число:"));
    const initialNum1 = num1;
    const initialNum2 = num2;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }
    const gcd = num1 + num2;
    alert(`Найбільший спільний дільник для чисел ${initialNum1} та ${initialNum2} — це ${gcd}`);
}

function findDivisors() {
    const number = parseInt(prompt("Введіть число для пошуку дільників:"));
    let result = `Дільники числа ${number}: `;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result += i + "; "; 
        }
    }
    alert(result);
}

function findPalindrom() {
    const input = prompt("Введіть п'ятирозрядне число:");
    if (input.length !== 5 || isNaN(input)) {
        alert("Помилка: потрібно ввести саме 5-значне число.");
    } else {
        if (input[0] === input[4] && input[1] === input[3]) {
            alert(`Число ${input} є паліндромом!`);
        } else {
            alert(`Число ${input} НЕ є паліндромом.`);
        }
    }
}

function findDiscount() {
    const purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
    let discount = 0;
    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discount = 0.03; // 3%
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discount = 0.05; // 5%
    } else if (purchaseAmount >= 500) {
        discount = 0.07; // 7%
    }
    const finalAmount = purchaseAmount * (1 - discount);
    alert(`Сума до оплати зі знижкою: ${finalAmount.toFixed(2)} грн (ваша знижка: ${discount * 100}%)`);
}

function findStatistic(){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;
    let num;
    for (let i = 1; i <= 10; i++) {
        num = parseInt(prompt(`Введіть число №${i}:`));
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    alert(`Статистика введених чисел:
- Додатних: ${positiveCount}
- Від'ємних: ${negativeCount}
- Нулів: ${zeroCount}
- Парних: ${evenCount}
- Непарних: ${oddCount}`);
}

function findNextDay() {
    const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    let currentDayIndex = 0;
    while (confirm(`${days[currentDayIndex]}. Хочеш побачити наступний день?`)) {
        currentDayIndex = (currentDayIndex + 1) % 7;
    }
}

function guessNumberGame() {
    alert("Загадайте число від 0 до 100, а я його відгадаю!");
    let min = 0;
    let max = 100;
    let userResponse = "";
    while (userResponse !== "==") {
        let N = Math.floor((min + max) / 2);
        userResponse = prompt(`Ваше число > ${N}, < ${N} або == ${N}?\n(Введіть: >, < або ==)`);
        if (userResponse === "==") {
            alert(`Ура! Я вгадав ваші число, це ${N}!`);
        } else if (userResponse === ">") {
            min = N + 1;
        } else if (userResponse === "<") {
            max = N - 1;
        } else if (userResponse === null) {
            break;
        } else {
            alert("Будь ласка, введіть коректний знак: '>', '<' або '=='");
        }
    }
}

function theMultiplicationTable() {
    const size = 10;
    let html = '';
    for (let i = 0; i <= size; i++) {
        for (let j = 0; j <= size; j++) {
            let counter = i === 0
                ? j
                : j === 0
                    ? i
                    : i * j;
            html += `<div${j === i ? ' class="accent"' : ""} data-index="${i}_${j}">${counter || "X"}</div>`;
        }
    }
    document.getElementById("wrapper").innerHTML = html;
}

function getNextDate() {
    let day = parseInt(prompt("Введіть день (1-31):"));
    let month = parseInt(prompt("Введіть місяць (1-12):"));
    let year = parseInt(prompt("Введіть рік:"));
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Помилка введення даних!");
        return;
    }
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    let daysInMonth = 31;
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30;
    } else if (month === 2) {
        daysInMonth = isLeap ? 29 : 28;
    }
    day++;
    if (day > daysInMonth) {
        day = 1;
        month++;
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    let formattedDay = day < 10 ? "0" + day : day;
    let formattedMonth = month < 10 ? "0" + month : month;
    alert(`Наступна дата: ${formattedDay}.${formattedMonth}.${year}`);
}
