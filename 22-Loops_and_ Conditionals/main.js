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


